import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallowEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { result } = useAppSelector(
    (state) => ({
      result: state.recommend.result
    }),
    shallowEqualApp
  )

  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />

      <div className="recommend-list">
        {result?.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} picWidth={140} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
