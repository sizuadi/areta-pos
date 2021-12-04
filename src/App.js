import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSanctum } from "react-sanctum";

import Admin from "./Layouts/Admin";
import Login from "./Views/Auth/Login";
import MasterBarang from "./Views/Barang/MasterBarang";
import NotFound from "./Views/Errors/NotFound";
import Dashboard from "./Views/Home/Dashboard";
import Blank from "./Views/Blank";

import { authorized, guest } from "./Util/authHelper";

function App() {
  const { authenticated } = useSanctum();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={guest(<Login />, authenticated)} />
        <Route path="/" element={authorized(<Admin component={<Dashboard />} />, authenticated)} />
        <Route path="inventory">
          <Route path="master-barang" element={authorized(<Admin component={<MasterBarang />} />, authenticated)}/>
          <Route path="kategori-barang" element={authorized(<Admin component={<Blank />} />, authenticated)}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
