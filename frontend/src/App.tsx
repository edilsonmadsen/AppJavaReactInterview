import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/nav-bar";
import ProductList from "./components/products-list";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
