import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import Drafts from '../../components/drafts/Drafts'
import Learn from '../../components/learn/Learn'
import MyProfile from '../../components/my profile/MyProfile'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/drafts' element={<Drafts/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      <Route path='/learn' element={<Learn/>}/>
    </Routes>
  )
}

export default MainRoutes