import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./Routes/About";
import Contact from "./Routes/Contact";
import CoinDetail from "./cryptoApp/CoinDetail";
import CryptoApp from "./cryptoApp/CryptoApp";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoApp />}></Route>
        <Route path="/:coinId/*" element={<CoinDetail />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
