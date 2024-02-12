export interface ILyric {
  time: number
  text: string
}

export function parseLyric(lyricStr: string) {
  // 1.拿到一行行的歌词
  const lines: string[] = lyricStr.split('\n')

  // 2.对每句歌词进行解析,解析成对应的对象
  const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  const lyrics: ILyric[] = []
  lines.forEach((item) => {
    // 1) 匹配结果
    // time: timeRegExp.exec(item.slice(0, 10)),
    const results = timeRegExp.exec(item)
    if (!results) return

    // 2) 获取每一组的时间
    const time1 = Number(results[1]) * 60 * 1000
    const time2 = Number(results[2]) * 1000
    const time3 = Number(results[3]) * (results[3].length === 2 ? 10 : 1)
    const time = time1 + time2 + time3

    // 3) 获取每一组的文本
    const text = item.replace(timeRegExp, '')

    // 把时间和文本组合成对象,push到lyrics
    lyrics.push({ time, text })
  })

  return lyrics
}
