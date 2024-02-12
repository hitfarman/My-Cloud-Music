import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service'
import { ILyric, parseLyric } from '@/utils/parse-lyric'

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  currentSong: {
    name: '向云端',
    id: 2049512697,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1192268,
        name: '小霞',
        tns: [],
        alias: []
      },
      {
        id: 36985903,
        name: '海洋Bo',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 6,
    crbt: null,
    cf: '',
    al: {
      id: 166146490,
      name: '向云端',
      picUrl:
        'https://p1.music.126.net/TmOHxaGnFNlwNX8aPz66oA==/109951168638913915.jpg',
      tns: [],
      pic_str: '109951168638913915',
      pic: 109951168638913920
    },
    dt: 251613,
    h: {
      br: 320000,
      fid: 0,
      size: 10066605,
      vd: -29886,
      sr: 48000
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6039981,
      vd: -27277,
      sr: 48000
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4026669,
      vd: -25558,
      sr: 48000
    },
    sq: {
      br: 915752,
      fid: 0,
      size: 28801918,
      vd: -29935,
      sr: 48000
    },
    hr: {
      br: 1683323,
      fid: 0,
      size: 52943266,
      vd: -29903,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 17716748288,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 6,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    mst: 9,
    cp: 0,
    rtype: 0,
    rurl: null,
    publishTime: 0
  },
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '有一天',
      id: 32507840,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1081766,
          name: '蔡紫',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 5,
      st: 0,
      rt: null,
      fee: 0,
      v: 6,
      crbt: null,
      cf: '',
      al: {
        id: 3162414,
        name: '有一天',
        picUrl:
          'https://p2.music.126.net/-Zd2jte8apMtJL9lU4vxNw==/2887317536462592.jpg',
        tns: [],
        pic: 2887317536462592
      },
      dt: 239000,
      h: {
        br: 320000,
        fid: 0,
        size: 9588079,
        vd: -43525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5752886,
        vd: -40957,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3835289,
        vd: -39338,
        sr: 44100
      },
      sq: {
        br: 891194,
        fid: 0,
        size: 26696520,
        vd: -43513,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 1433779200007
    },
    {
      name: '向云端',
      id: 2049512697,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1192268,
          name: '小霞',
          tns: [],
          alias: []
        },
        {
          id: 36985903,
          name: '海洋Bo',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 6,
      crbt: null,
      cf: '',
      al: {
        id: 166146490,
        name: '向云端',
        picUrl:
          'https://p1.music.126.net/TmOHxaGnFNlwNX8aPz66oA==/109951168638913915.jpg',
        tns: [],
        pic_str: '109951168638913915',
        pic: 109951168638913920
      },
      dt: 251613,
      h: {
        br: 320000,
        fid: 0,
        size: 10066605,
        vd: -29886,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6039981,
        vd: -27277,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4026669,
        vd: -25558,
        sr: 48000
      },
      sq: {
        br: 915752,
        fid: 0,
        size: 28801918,
        vd: -29935,
        sr: 48000
      },
      hr: {
        br: 1683323,
        fid: 0,
        size: 52943266,
        vd: -29903,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 0
    },
    {
      name: '忍受',
      id: 2109925442,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6472,
          name: '张杰',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 10,
      crbt: null,
      cf: '',
      al: {
        id: 181428669,
        name: '冬月初七',
        picUrl:
          'https://p1.music.126.net/YTRMgr4Y-TxzKgY-xRQplw==/109951169174233025.jpg',
        tns: [],
        pic_str: '109951169174233025',
        pic: 109951169174233020
      },
      dt: 270526,
      h: {
        br: 320000,
        fid: 0,
        size: 10823085,
        vd: -16380,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6493869,
        vd: -13745,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4329261,
        vd: -11983,
        sr: 48000
      },
      sq: {
        br: 733479,
        fid: 0,
        size: 24803244,
        vd: -16807,
        sr: 48000
      },
      hr: {
        br: 1501378,
        fid: 0,
        size: 50770424,
        vd: -16414,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 10,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 14687194,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 2708531,
      publishTime: 1703606400000
    },
    {
      name: '冷落',
      id: 1422947217,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6652,
          name: '周传雄',
          tns: [],
          alias: []
        }
      ],
      alia: ['《逆水寒》剧情推广曲'],
      pop: 90,
      st: 0,
      rt: '',
      fee: 0,
      v: 8,
      crbt: null,
      cf: '',
      al: {
        id: 85680381,
        name: '冷落',
        picUrl:
          'https://p1.music.126.net/X81IWnzGEkj7aTYgEpHZ_A==/109951164703030578.jpg',
        tns: [],
        pic_str: '109951164703030578',
        pic: 109951164703030580
      },
      dt: 235863,
      h: {
        br: 320000,
        fid: 0,
        size: 9436845,
        vd: -41607,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5662125,
        vd: -38993,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3774765,
        vd: -37329,
        sr: 48000
      },
      sq: {
        br: 893072,
        fid: 0,
        size: 26330440,
        vd: -41514,
        sr: 48000
      },
      hr: {
        br: 1661774,
        fid: 0,
        size: 48994086,
        vd: -41854,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 8,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rurl: null,
      mst: 9,
      cp: 500016,
      rtype: 0,
      publishTime: 0
    },
    {
      name: '后来',
      id: 1338211431,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 31165848,
          name: '刘大壮',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 0,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 91378009,
        name: '刘大壮的翻唱合辑',
        picUrl:
          'https://p2.music.126.net/Pjhed_enaZL4YFfkSZEixg==/109951165085372391.jpg',
        tns: [],
        pic_str: '109951165085372391',
        pic: 109951165085372380
      },
      dt: 326687,
      h: {
        br: 320000,
        fid: 0,
        size: 13068582,
        vd: -36754,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7841167,
        vd: -34137,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5227459,
        vd: -32438,
        sr: 44100
      },
      sq: null,
      hr: null,
      a: null,
      cd: '01',
      no: 9,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 254524,
        name: '后来',
        artists: [
          {
            id: 8326,
            name: '刘若英'
          }
        ],
        albumMeta: {
          id: 25430,
          name: '收获 新歌+精选'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1546937509297
    },
    {
      name: '现在的她 (正式版)',
      id: 1911580558,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 31165848,
          name: '刘大壮',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 138809125,
        name: '现在的她',
        picUrl:
          'https://p1.music.126.net/qmDQTXJrTUh_UZ19LrTMkw==/109951166926614750.jpg',
        tns: [],
        pic_str: '109951166926614750',
        pic: 109951166926614750
      },
      dt: 222214,
      h: {
        br: 320000,
        fid: 0,
        size: 8891080,
        vd: -43863,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5334666,
        vd: -41308,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3556458,
        vd: -39650,
        sr: 44100
      },
      sq: {
        br: 852600,
        fid: 0,
        size: 23682575,
        vd: -43856,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 0
    },
    {
      name: '漂洋过海来看你',
      id: 32807083,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 8326,
          name: '刘若英',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 95,
      st: 0,
      rt: null,
      fee: 0,
      v: 776,
      crbt: null,
      cf: '',
      al: {
        id: 3159840,
        name: '热门华语266',
        picUrl:
          'https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg',
        tns: [],
        pic_str: '109951166361218466',
        pic: 109951166361218460
      },
      dt: 124000,
      h: {
        br: 320000,
        fid: 0,
        size: 4997790,
        vd: -74952,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 2998691,
        vd: -72307,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 1999141,
        vd: -70521,
        sr: 44100
      },
      sq: null,
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 0,
      originCoverType: 2,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 776,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      publishTime: 1388505600004
    },
    {
      name: '心动(Live)',
      id: 29401509,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 9940,
          name: '徐佳莹',
          tns: [],
          alias: []
        },
        {
          id: 8326,
          name: '刘若英',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 85,
      st: 0,
      rt: null,
      fee: 0,
      v: 760,
      crbt: null,
      cf: '',
      al: {
        id: 3017439,
        name: '热门华语241',
        picUrl:
          'https://p1.music.126.net/cpoUinrExafBHL5Nv5iDHQ==/109951166361218466.jpg',
        tns: [],
        pic_str: '109951166361218466',
        pic: 109951166361218460
      },
      dt: 212000,
      h: null,
      m: {
        br: 192000,
        fid: 0,
        size: 5107761,
        vd: -14695,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3405204,
        vd: -14695,
        sr: 44100
      },
      sq: null,
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 524416,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 760,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5393849,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 1388505600004
    },
    {
      name: '有一种爱叫做放手',
      id: 60394,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1881,
          name: '阿木',
          tns: [],
          alias: []
        }
      ],
      alia: ['电视剧《伤城之恋》片头曲'],
      pop: 100,
      st: 0,
      rt: '600902000009522576',
      fee: 8,
      v: 101,
      crbt: null,
      cf: '',
      al: {
        id: 5879,
        name: '有一种爱叫做放手',
        picUrl:
          'https://p2.music.126.net/wnVOcTmOrFf4Icuxld_DdA==/109951163067908206.jpg',
        tns: [],
        pic_str: '109951163067908206',
        pic: 109951163067908210
      },
      dt: 265826,
      h: {
        br: 320000,
        fid: 0,
        size: 10636060,
        vd: -47682,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6381653,
        vd: -45181,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4254450,
        vd: -43679,
        sr: 44100
      },
      sq: {
        br: 962771,
        fid: 0,
        size: 31991300,
        vd: -47661,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 101,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5343933,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1416227,
      publishTime: 1177948800000
    }
  ],
  playSongIndex: -1
}

export const fetchCurrentSongData = createAsyncThunk(
  'player',
  (id: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      // 获取song
      if (!res.songs.length) return
      const song = res.songs[0]

      // 将song放到currentSong中
      dispatch(changeCurrentSongAction(song))
    })

    // 2.获取歌词数据
    getSongLyric(id).then((res: any) => {
      // 1)获取歌词字符串
      const lyricStr = res.lrc.lyric

      // 2)对歌词进行解析(解析成一个个对象)
      const lyrics = parseLyric(lyricStr)

      // 3)将歌词放到state中
      dispatch(changeLyricsAction(lyrics))
    })
  }
)
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
