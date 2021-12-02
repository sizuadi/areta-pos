import LoginPage from './pages/Auth/LoginPage'
import Dashboard from './pages/Home/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './pages/Layouts/Admin'
import MasterBarang from './pages/Barang/MasterBarang'
import NotFound from './pages/Errors/NotFound'
import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export default function App() {  
  const user = useContext(UserContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Admin userdata={user} component={<Dashboard />} />} />
        <Route path='/master-barang' element={<Admin userdata={user} component={<MasterBarang />} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
