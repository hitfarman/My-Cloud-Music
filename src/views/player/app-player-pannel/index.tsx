import React, { memo, useEffect, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import {
  HeaderLeftWrapper,
  HeaderRightWrapper,
  PannelHeaderWrapper,
  PannelListWrapper,
  PannelLyricWrapper,
  PlayerPannelWrapper
} from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import classNames from 'classnames'
import { formatTime } from '@/utils/format'
import { scrollTo } from '@/utils/ui-helper'
import {
  changeCurrentSongAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changeShowPanelAction
} from '../store/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerPannel: FC<IProps> = () => {
  const { playSongList, currentSong, playSongIndex, currentLyric, lyricIndex } = useAppSelector(
    (state) => ({
      playSongList: state.player.playSongList,
      currentSong: state.player.currentSong,
      playSongIndex: state.player.playSongIndex,
      currentLyric: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    })
  )

  const dispatch = useAppDispatch()
  function handlePlaySong(song: any, index: number) {
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(index))
  }

  function handleClearPlayList() {
    dispatch(changePlaySongListAction([]))
  }

  function handleDeleteSong(e: React.SyntheticEvent<EventTarget>, index: number) {
    e.stopPropagation()
    const newPlayList = [...playSongList]
    newPlayList.splice(index, 1)
    dispatch(changePlaySongListAction(newPlayList))
  }

  function handleClosePanel() {
    dispatch(changeShowPanelAction(false))
  }

  // other hooks
  const panelRef = useRef<ElementRef<typeof PannelLyricWrapper>>(null)
  useEffect(() => {
    if (lyricIndex > 0 && lyricIndex < 3) return
    scrollTo(panelRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])

  return (
    <PlayerPannelWrapper>
      <PannelHeaderWrapper>
        <HeaderLeftWrapper>
          <h3>播放列表({playSongList.length})</h3>
          <div className="operator">
            <button>
              <i className="sprite_playlist icon favor"></i>
              收藏全部
            </button>
            <button onClick={handleClearPlayList}>
              <i className="sprite_playlist icon remove"></i>
              清除
            </button>
          </div>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <span>{currentSong.name}</span>
          <button className="sprite_playlist icon close" onClick={handleClosePanel}></button>
        </HeaderRightWrapper>
      </PannelHeaderWrapper>
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <PannelListWrapper>
          {playSongList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={classNames('play-item', { active: index === playSongIndex })}
                onClick={() => handlePlaySong(item, index)}
              >
                <div className="left">{item.name}</div>
                <div className="middle">
                  <i className="sprite_playlist icon favor"></i>
                  <i className="sprite_playlist icon share"></i>
                  <i className="sprite_playlist icon download"></i>
                  <i
                    className="sprite_playlist icon delete"
                    onClick={(e) => handleDeleteSong(e, index)}
                  ></i>
                </div>
                <div className="right">
                  <span className="singer">{item.ar[0].name}</span>
                  <span className="duration">{formatTime(item.dt)}</span>
                  <span className="sprite_playlist link"></span>
                </div>
              </div>
            )
          })}
        </PannelListWrapper>
        <PannelLyricWrapper ref={panelRef}>
          <div className="lrc-content">
            {currentLyric.map((item, index) => {
              return (
                <div
                  key={item.time}
                  className={classNames('lrc-item', { active: index === lyricIndex })}
                >
                  {item.text}
                </div>
              )
            })}
          </div>
        </PannelLyricWrapper>
      </div>
    </PlayerPannelWrapper>
  )
}

export default memo(AppPlayerPannel)
