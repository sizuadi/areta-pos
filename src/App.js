import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSanctum } from "react-sanctum";
import Admin from "./Layouts/Admin";
import Login from "./Pages/Auth/Login";
import MasterBarang from "./Pages/Barang/MasterBarang";
import NotFound from "./Pages/Errors/NotFound";
import Dashboard from "./Pages/Home/Dashboard";
import { authorized, guest } from "./Util/authHelper";

function App() {
  const { authenticated } = useSanctum();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={guest(<Login />, authenticated)} />
        <Route
          path="/"
          element={authorized(
            <Admin component={<Dashboard />} />,
            authenticated
          )}
        />
        <Route
          path="/master-barang"
          element={authorized(
            <Admin component={<MasterBarang />} />,
            authenticated
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
