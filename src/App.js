import LoginPage from './pages/Auth/LoginPage'
import Dashboard from './pages/Home/Dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './pages/Layouts/Admin'
import MasterBarang from './pages/Barang/MasterBarang'
import NotFound from './pages/Errors/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Admin component={<Dashboard />} />} />
        <Route path='/master-barang' element={<Admin component={<MasterBarang />} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
