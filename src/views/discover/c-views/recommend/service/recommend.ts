import hyRequest from '@/service'
import { HEADERS } from '@/service/config'

export function getBanners<T = any>() {
  return hyRequest.get<T>({
    url: '/banner',
    headers: HEADERS
  })
}
