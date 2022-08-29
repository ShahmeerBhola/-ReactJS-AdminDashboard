import { Routes, Route } from "react-router-dom";

// css
import "./css/style.css";

// pages
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import QRcode from "./pages/QRcode";
import Redeem from "./pages/Redeem";
import Revenue from "./pages/Revenue";
import Surge from "./pages/Surge";
import Wait from "./pages/Wait";
import Addticket from "./pages/Addticket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/surge" element={<Surge />} />
      <Route path="/wait" element={<Wait />} />
      <Route path="/addticket" element= {<Addticket />}/>
      <Route path="/qr" element={<QRcode />} />
      <Route path="/redeem/:id/:ab" element={<Redeem />} />
    </Routes>
  );
}

export default App;
