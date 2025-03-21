import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Shop from "./pages/shop/Shop";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Cart from "./components/Cart.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import ProductDetail from './components/ProductDetail';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* cart and checkout page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/product/:id" element={<ProductDetail />} />

        {/* error page */}
        <Route path="*" element={<ErrorPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
