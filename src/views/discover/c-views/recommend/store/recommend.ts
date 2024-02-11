import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

interface IRecommendState {
  banners: any[]
  result: any[]
  albums: any[]
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

const initialState: IRecommendState = {
  banners: [],
  result: [],
  albums: []
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
  changeNewAlbumAction
} = recommendSlice.actions

export default recommendSlice.reducer
