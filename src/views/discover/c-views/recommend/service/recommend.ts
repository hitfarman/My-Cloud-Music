import hyRequest from '@/service'
import { HEADERS } from '@/service/config'

export function getBanners<T = any>() {
  return hyRequest.get<T>({
    url: '/banner',
    headers: HEADERS
  })
}

export function getHotRecommend<T = any>(limit = 30) {
  return hyRequest.get<T>({
    url: '/personalized',
    headers: HEADERS,
    params: {
      limit
    }
  })
}

export function getNewAlbum<T = any>() {
  return hyRequest.get<T>({
    url: '/album/newest',
    headers: HEADERS
  })
}
