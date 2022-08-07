import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import Drafts from '../../components/drafts/Drafts'
import FAQ from '../../components/faq/FAQ'
import MyProfile from '../../components/my profile/MyProfile'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/drafts' element={<Drafts/>}/>
      <Route path='/profile' element={<MyProfile/>}/>
      <Route path='/faq' element={<FAQ/>}/>
    </Routes>
  )
}

export default MainRoutes