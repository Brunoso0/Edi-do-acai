import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import NossaFabrica from "./pages/NossaFabrica";
import Produtos from "./pages/Produtos";
import Franquias from "./pages/Franquias"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <QuemSomos />
      <NossaFabrica />
      <Produtos />
      <Franquias />
      <Footer />
    </Router>
  );
}

export default App;

