import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Singleproduct from "./components/Singleproduct";
import Cart from "./components/Cart";
import Errorpage from "./components/Errorpage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import { GlobalStyle } from "./components/GlobalStyle";
// import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* <Header /> */} <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/product" element={<Product />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/singleproduct/:id" element={<Singleproduct />} />{" "}
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="*" element={<Errorpage />} />{" "}
        </Routes>{" "}
        <Footer />
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
