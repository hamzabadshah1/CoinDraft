import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import ContestCreated from '../../components/contestCreated/ContestCreated'
import ContestLobby from '../../components/contestLobby/ContestLobby'
import CreateContest from '../../components/createContest/CreateContest'
import Drafts from '../../components/drafts/Drafts'
import GameSchedule from '../../components/gameSchedule/GameSchedule'
import LeaderBoard from '../../components/leaderboard/LeaderBoard'
import Home from '../../components/home/Home'
import Menu from '../../components/menu/Menu'
import TrendingCoins from '../../components/trendingCoins/TrendingCoins'
import PrizePayouts from '../../components/prizePayouts/PrizePayouts'
import FAQ from '../../components/faq/FAQ'
import MyProfile from '../../components/my profile/MyProfile'
import NftMatchups from '../../components/nftMatchups/NftMatchups'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/trending-coins' element={<TrendingCoins />} />
      <Route path='/prize-payouts' element={<PrizePayouts />} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/login' element={<Login />} />
      <Route path='/drafts' element={<Drafts />} />
      <Route path='/leaderboard' element={<LeaderBoard />} />
      <Route path='/gameschedule' element={<GameSchedule />} />
      <Route path='/contest' element={<ContestLobby />} />
      <Route path='/createcontest' element={<CreateContest />} />
      <Route path='/contestcreated' element={<ContestCreated />} />
      <Route path='/nftmatchups' element={<NftMatchups />} />
    </Routes>
  )
}

export default MainRoutes