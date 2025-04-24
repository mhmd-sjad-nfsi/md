import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* صفحه اصلی */}
        <Route path="/product/:id" element={<ProductScreen />} /> {/* صفحه محصول */}
      </Routes>
    </Router>
  );
}

export default App;
