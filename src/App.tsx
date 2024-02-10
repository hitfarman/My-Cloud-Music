import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'
import routes from './router'
import Demo02 from './views/demo/demo02'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const { count, messsage } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      messsage: state.counter.message,
      direction: state.counter.direction,
      names: state.counter.names
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()
  // 事件处理函数
  function changeMessage() {
    dispatch(changeMessageAction('你好啊 Redux'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <Demo02 name="why" />
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {messsage}</h2>
      <button onClick={changeMessage}>修改message</button>
    </div>
  )
}

export default App
