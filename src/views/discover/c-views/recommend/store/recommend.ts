import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'

interface IRecommendState {
  banners: any[]
  result: any[]
  albums: any[]
}
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners<IRecommendState>()
    dispatch(changeBannersAction(res.banners))
  }
)

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend<IRecommendState>(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumAction = createAsyncThunk(
  'newAlubum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum<IRecommendState>()
    dispatch(changeNewAlbumAction(res.albums))
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
