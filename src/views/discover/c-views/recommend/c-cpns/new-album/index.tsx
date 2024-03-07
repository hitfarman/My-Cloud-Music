import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  /** 定义内部的数据 */
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 从Redux中获取数据 */
  const { albums = [] } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    shallowEqualApp
  )

  /** 事件处理函数 */
  function handlePrevClick() {
    carouselRef.current?.prev()
  }
  function handleNextClick() {
    carouselRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel speed={1000} dots={false} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
