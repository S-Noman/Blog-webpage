import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import BlogsPage from "./pages/BlogsPage";
import SinglePost from "./pages/SinglePost";
import { useParams } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blog/*" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
