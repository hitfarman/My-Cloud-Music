import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useAppDispatch } from './store'
import { changeShowPanelAction, fetchCurrentSongData } from './views/player/store/player'
import AppPlayerBar from './views/player/app-player-bar'

function App() {
  //获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongData(32507840))
  }, [])

  function handleClick() {
    dispatch(changeShowPanelAction(false))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main" onClick={handleClick}>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
      {/* 播放器工具栏 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
