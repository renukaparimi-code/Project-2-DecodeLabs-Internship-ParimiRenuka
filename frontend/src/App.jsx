import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Details from "./pages/Details";
import Admin from "./pages/Admin";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explorer" element={<Explorer />} />

        <Route path="/details/:id" element={<Details />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;