import hyRequest from '@/service'
import { HEADERS } from '@/service/config'

export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: '/song/detail',
    headers: HEADERS,
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return hyRequest.get({
    url: '/lyric',
    headers: HEADERS,
    params: {
      id
    }
  })
}
