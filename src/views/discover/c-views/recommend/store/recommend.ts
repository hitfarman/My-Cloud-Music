import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'

interface IRecommendState {
  banners: any[]
  result: any[]
  albums: any[]

  rankings: any[]
  // upRanking: any
  // newRanking: any
  // originRanking: any
}
export const fetchRecommednDataAction = createAsyncThunk(
  'fetchRecommendData',
  (_, { dispatch }) => {
    /** 1. 获取轮播图数据 */
    getBanners<IRecommendState>().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    /** 2. 获取热门推荐数据 */
    getHotRecommend<IRecommendState>(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    /** 3. 获取新碟上架数据 */
    getNewAlbum<IRecommendState>().then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
)

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'fetchRankingData',
  (_, { dispatch }) => {
    /** 1. 获取排行榜榜单数据 */
    // 方案一: 每个请求单独处理
    // rankingIds.forEach((item) => {
    //   getPlaylistDetail<IRecommendState>(item).then((res) => {
    //     switch (item) {
    //       case 19723756:
    //         console.log('飙升榜的数据', res)
    //         break
    //       case 3779629:
    //         console.log('新歌榜的数据', res)
    //         break
    //       case 2884035:
    //         console.log('原创榜的数据', res)
    //         break
    //       default:
    //         break
    //     }
    //   })
    // })
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // 方案二:将三个结果都拿到,统一放到一个数组中管理
    const promises: Promise<any>[] = []
    rankingIds.forEach((item) => {
      promises.push(getPlaylistDetail<any>(item))
    })

    Promise.all(promises).then((res) => {
      /* 这里拿到的res的结果一定是有正确的顺序的,
        而且这个res是等到promises中的promise全部调了resolve()之后才会到这里, 所以可以保证:
        第一: 拿到所有结果再来到这里;
        第二:可以保证这里结果的顺序,跟添加的promise顺序有关, 它内部帮我们做了顺序的记录
       */
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playlists))
    })
  }
)

const initialState: IRecommendState = {
  banners: [],
  result: [],
  albums: [],

  rankings: []
  // upRanking: {},
  // newRanking: {},
  // originRanking: {}
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },

    changeHotRecommendAction(state, { payload }) {
      state.result = payload
    },

    changeNewAlbumAction(state, { payload }) {
      state.albums = payload
    },

    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction
} = recommendSlice.actions

export default recommendSlice.reducer
