import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../components/auth/Login'
import Drafts from '../../components/drafts/Drafts'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/drafts' element={<Drafts/>}/>
    </Routes>
  )
}

export default MainRoutes