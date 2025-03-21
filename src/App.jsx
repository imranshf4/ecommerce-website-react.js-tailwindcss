import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import { MiniCart } from "./components/MiniCart";
import { CartProvider } from "./context/CartContext";
import Services from "./components/Services";
import { AddToCartProvider } from "./context/AddToCartContext";
function App() {
  return (
    <>
      {/* cart section */}
      <AddToCartProvider>
        <CartProvider>
          <Navbar />
          <MiniCart />

          <main className="min-h-screen">
            <Outlet></Outlet>
          </main>
          <footer>
            <Services />
            <Footer />
          </footer>
        </CartProvider>
      </AddToCartProvider>
    </>
  );
}

export default App;
