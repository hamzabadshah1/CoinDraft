import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import Drafts from '../../components/drafts/Drafts'
import LeaderBoard from '../../components/leaderboard/LeaderBoard'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/drafts' element={<Drafts />} />
      <Route path='/leaderboard' element={<LeaderBoard />} />
    </Routes>
  )
}

export default MainRoutes