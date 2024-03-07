import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getImageUrl } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { artists } = useAppSelector(
    (state) => ({
      artists: state.recommend.artists
    }),
    shallowEqualApp
  )

  return (
    <SingerWrapper>
      <AreaHeaderV2 title="入驻歌手" moreText="查看全部&gt;" moreLink="#/discover/artist" />
      <div className="artists">
        {artists?.map((item: any) => {
          return (
            <a href="#/discover/artist" key={item.id} className="item">
              <img src={getImageUrl(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
