import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from './style'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageUrl } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction,
  changeShowPanelAction
} from '../store/player'
import AppPlayerPannel from '../app-player-pannel'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  /** 组件内部定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isLocked, setIsLocked] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  /** 从Redux中获取数据 */
  const { currentSong, lyrics, lyricIndex, playMode, playSongList, showPanel } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
      playSongList: state.player.playSongList,
      showPanel: state.player.showPanel
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1. 播放音乐(!非空断言)
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err: any) => {
        setIsPlaying(false)
        console.log('歌曲播放失败', err)
      })

    // 2.获取音乐的总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 音乐播放进度的处理 */
  function handleTimeUpdate() {
    // 1.获取当前的播放事件(!非空断言)
    const currentTime = audioRef.current!.currentTime * 1000
    setCurrentTime(currentTime)

    // 2.计算当前歌曲进度
    if (isDragging) {
      return
    }
    const progress = (currentTime / duration) * 100
    setProgress(progress)

    // 3.根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time > currentTime) {
        index = i - 1
        break
      }
    }

    // 4.匹配上对应的歌词的index,记录到store
    if (index === lyricIndex || index === -1) return
    dispatch(changeLyricIndexAction(index))

    // 5.展示对应的歌词, antd5,不能好修改CSS属性了
    // message.open({
    //   content: lyrics[index].text,
    //   key: 'lyric',
    //   duration: 0
    // })
  }

  /** 歌曲播放完, 根据播放模式,自动切换下一首 */
  function handleSongEnded() {
    if (playMode === 2) {
      // 单曲循环
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  /** 组件内部的事件处理 */
  function handlePlayClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handleSliderChanging(value: number) {
    // 0.设置目前是处于拖拽状态的
    setIsDragging(true)

    // 1. 设置progress
    setProgress(value)

    // 2. 设置currentTime
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  function handleSliderChanged(value: number) {
    // 1.获取点击位置的时间
    const currentTime = (value / 100) * duration

    // 2.设置当前播放的时间 (!非空断言)
    audioRef.current!.currentTime = currentTime / 1000

    // 3.currentTime/progress
    setCurrentTime(currentTime)
    setProgress(value)
    setIsDragging(false)
  }

  function handleChangePlayMode() {
    const newPlayMode = (playMode + 1) % 3
    dispatch(changePlayModeAction(newPlayMode))
  }

  function handleClock() {
    if (showPanel) return
    console.log('handleClock1:', isLocked)
    setIsLocked(!isLocked)
    console.log('handleClock2:', isLocked)
  }

  function handleShowPlayList() {
    const newValue = !showPanel
    dispatch(changeShowPanelAction(newValue))
    if (newValue) {
      setIsLocked(true)
    }
  }

  function handleVolumeClick() {
    console.log(audioRef.current?.volume)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar" islock={isLocked}>
      <div className="content wrap-v2">
        <BarControl isplaying={isPlaying ? 'true' : 'false'}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button className="btn sprite_playbar play" onClick={handlePlayClick}></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic(true)}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="image" src={getImageUrl(currentSong?.al?.picUrl, 34)} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">
                {currentSong?.ar?.map((item: any) => item.name).join('/')}
              </span>
            </div>
            <div className="progress">
              {/* Slider组件 */}
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ open: false }}
                onChange={handleSliderChanging}
                onChangeComplete={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playmode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume" onClick={handleVolumeClick}></button>
            <button className="btn sprite_playbar loop" onClick={handleChangePlayMode}></button>
            <button className="btn sprite_playbar playlist" onClick={handleShowPlayList}>
              {playSongList.length}
            </button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleSongEnded} />
      {/* {isPlaying && (
        <div className="lyric">
          <div className="div">{lyrics[lyricIndex]?.text}</div>
        </div>
      )} */}
      <div className="show-bar sprite_playbar">
        <button className="lock sprite_playbar" onClick={handleClock}></button>
      </div>
      {showPanel && <AppPlayerPannel />}
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
