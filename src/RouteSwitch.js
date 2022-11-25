import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
