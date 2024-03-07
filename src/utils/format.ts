export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageUrl(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(ms: number) {
  const timeSeconds = ms / 1000

  // 获取分钟和秒钟
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = Math.floor(timeSeconds) % 60

  //格式化时间
  const formatMinute = String(minutes).padStart(2, '0')
  const formatSecond = String(seconds).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
