import { Routes, Route } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Hoc/RequireAuth";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Plants from "./Pages/Plants";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import SIngleProduct from "./Pages/SIngleProduct";
import SinglePlant from "./Pages/SinglePlant";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <SIngleProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="/plants" element={<Plants />}></Route>
        <Route
          path="/plants/:id"
          element={
            <RequireAuth>
              <SinglePlant />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
