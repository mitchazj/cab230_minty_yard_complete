import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ^ these imports are third party

// these imports are all OUR code
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
