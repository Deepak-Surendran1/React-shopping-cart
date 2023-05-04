import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/ProductDetails/:id" element={<ProductDetails />}/>
        </Routes> 
        
      </div>
    </BrowserRouter>
  );
}

export default App;
