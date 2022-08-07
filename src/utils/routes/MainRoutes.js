import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import ContestLobby from '../../components/contestLobby/ContestLobby'
import Drafts from '../../components/drafts/Drafts'
import GameSchedule from '../../components/gameSchedule/GameSchedule'
import LeaderBoard from '../../components/leaderboard/LeaderBoard'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/drafts' element={<Drafts />} />
      <Route path='/leaderboard' element={<LeaderBoard />} />
      <Route path='/gameschedule' element={<GameSchedule />} />
      <Route path='/contest' element={<ContestLobby />} />
    </Routes>
  )
}

export default MainRoutes