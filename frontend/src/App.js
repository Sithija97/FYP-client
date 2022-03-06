import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import AddBook from "./components/addBook";
import Books from "./components/books";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
