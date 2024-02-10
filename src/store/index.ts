import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

/*
 export const useAppSelector = useSelector
 1. 直接把 useSelector 赋值给 useAppSelector 没用;
 2. 使用 TypedUseSelectorHook<TState> 给 useAppSelector标识符 指定类型;
 3. 但是, TypedUseSelectorHook<TState> 类型是要接收一个泛型参数的, 把 IRootState 传给它的泛型参数即可
 所以, 我们新定义的 useAppSelector 就具备了 TypedUseSelectorHook<IRootState> 类型了.
 这个类型是什么东西呢? ---- 它是一个函数签名:
 interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
 }
 */

// 把 useSelector 赋值给 useAppSelector,但是, 给 useAppSelector 指定了一个函数调用签名, 在调用签名里面通过泛型 告诉它里面的 state 的类型是 IRootState, 这样在使用 useAppSelector函数的时候,就能正确推导出 state的类型了
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
