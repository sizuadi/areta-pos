import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSanctum } from "react-sanctum";

import Admin from "./Layouts/Admin";
import Login from "./Pages/Auth/Login";
import MasterBarang from "./Pages/Inventory/MasterBarang/Index";
import Dashboard from "./Pages/Home/Dashboard";
import NotFound from "./Pages/Errors/NotFound";
import Blank from "./Pages/Blank";

import { authorized, guest } from "./Util/authHelper";
import Cashier from "./Pages/Cashier";
import Kategori from "./Pages/Inventory/KategoriBarang/Index";
import Create from "./Pages/Inventory/MasterBarang/Create";

function App() {
  const { authenticated } = useSanctum();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={guest(<Login />, authenticated)} />
        <Route path="/" element={authorized(<Admin component={<Dashboard />} />, authenticated)} />
        <Route path="inventory">
          <Route path="master-barang" element={authorized(<Admin component={<MasterBarang />} />, authenticated)}>
          </Route>
          <Route path="master-barang/create" element={authorized(<Admin component={<Create />} />, authenticated)}/>
          <Route path="kategori-barang" element={authorized(<Admin component={<Kategori />} />, authenticated)}/>
        </Route>
        <Route path="not-set" element={authorized(<Admin component={<Blank />} />, authenticated)} />
        <Route path="cashier" element={authorized(<Admin component={<Cashier />} />, authenticated)} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
