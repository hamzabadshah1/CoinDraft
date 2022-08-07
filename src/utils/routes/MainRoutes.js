import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import Drafts from '../../components/drafts/Drafts'
import Home from '../../components/home/Home'
import Menu from '../../components/menu/Menu'
import TrendingCoins from '../../components/trendingCoins/TrendingCoins'
import PrizePayouts from '../../components/prizePayouts/PrizePayouts'
import FAQ from '../../components/faq/FAQ'
import MyProfile from '../../components/my profile/MyProfile'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/trending-coins' element={<TrendingCoins/>}/>
      <Route path='/prize-payouts' element={<PrizePayouts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/drafts' element={<Drafts/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      <Route path='/faq' element={<FAQ/>}/>

    </Routes>
  )
}

export default MainRoutes