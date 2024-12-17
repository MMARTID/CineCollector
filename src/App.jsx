import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyMoviesServer from"./pages/MyMoviesServer"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesList from "./components/MoviesList";


import "./App.css";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchMovies" element={<MoviesList/>} />
        <Route path="/myMovies" element={<MyMoviesServer/>}/>
       
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
