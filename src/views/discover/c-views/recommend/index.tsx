import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import hyRequest from '@/service'
import { HEADERS } from '@/service/config'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  // 测试网络请求
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner',
        headers: HEADERS
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners?.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
