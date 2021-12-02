import LoginPage from "./pages/Auth/LoginPage";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
