import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NabBar from "./components/NabBar/NabBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Error404 from "./components/Error404";
import CartContextProvider from "./components/Context/CartContext";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart/Cart";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="pt-5">
      <CartContextProvider>
        <BrowserRouter>
          <NabBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
            <Route path={"/thankyou/:orderId"} element={<ThankYou />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
