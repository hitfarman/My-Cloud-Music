import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { getImageUrl } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongData } from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
  itemData: any
  rankingId: number
}

const TopRankingItem: FC<IProps> = (props) => {
  const { itemData, rankingId } = props
  /** 如果没有结构出来给tracks一个空数组[], 如果不给初始值为空数组, 默认是undefined,就会报错 */
  const { tracks = [] } = itemData
  const moreLink = '#/discover/ranking/' + rankingId

  const dispatch = useAppDispatch()
  function handlePlayMusic(id: number) {
    dispatch(fetchCurrentSongData(id))
  }

  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageUrl(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover mask"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operate">
                  <button
                    className="sprite_02 btn play"
                    onClick={() => handlePlayMusic(item.id)}
                  ></button>
                  <button className="sprite_icon2 btn add"></button>
                  <button className="sprite_02 btn favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href={moreLink}>查看全部&gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
