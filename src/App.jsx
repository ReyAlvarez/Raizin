import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NabBar from "./components/NabBar/NabBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Error404 from "./components/Error404";
import CartContext from "./components/Context/CartContext";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart/Cart";

function App() {
  // todo debe quedar dentro de div's o <>xxx</>
  return (
    <div className="pt-5">
      <CartContext.Provider>
        <BrowserRouter>
          <NabBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/Checkout"} element={<Checkout />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
