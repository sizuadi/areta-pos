import Auth from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
    setUser({
      username: "Benny Rahmat",
    });
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth authHandler={handleAuth} isAuthenticated={isAuthenticated} />} />
        <Route path='/' element={!isAuthenticated ? <Navigate from="/" to="/login" /> : <Home authHandler={handleAuth} authenticatedUser={user} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
