import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import ProductForm from "./ProductForm";
// import ProductsSection from "./ProductsSection";
// import Home from "./Home";
// import Features from "./Features";
// import Pricing from "./Pricing";
// import Footer from "./Footer";
import App from './App';



const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
