import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Products from "./Routes/Products";
import CoinDetail from "./cryptoApp/CoinDetail";
import CryptoApp from "./cryptoApp/CryptoApp";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoApp />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/:coinId/*" element={<CoinDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
