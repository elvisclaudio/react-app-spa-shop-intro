// import { GlobalProvider } from "./GlobalContext";
import Header from "./Header"; // Adjust path if needed
// import Section from "./Section";
import Footer from "./Footer";
import { useEffect, useState} from 'react';
import Navbar from "./Navbar";
// import ProductForm from "./ProductForm";
// import ProductsSection from "./ProductsSection";
import Home from "./Home";
import Features from "./Features";
import Pricing from "./Pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const addToCart = (productId) => {
  alert(`Product with ID ${productId} added to cart!`);
};

const getInfo = function (setProducts) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      const transformedProducts = data.slice(0, 10).map((item, index) => ({
        id: item.id,
        title: item.title,
        price: Math.floor(Math.random() * 1000),
        oldPrice: Math.floor(Math.random() * 1000) + 100,
        url: `https://picsum.photos/200/300?random=${index + 1}`
      }));
      setProducts(transformedProducts);
    });

}

function App() {
  // return (
  //   <GlobalProvider>
  //     <Header />
  //     <Section />
  //     <Footer />
  //   </GlobalProvider>
  // );
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getInfo(setProducts);
  }, []);


  let cart: string[] = [];

  cart[0] = "1";
  cart[1] = "2";
  // cart[2] = 3;
  const addProduct = (product) => {
    // const newProduct = { ...product, id: products.length + 1, url: `https://picsum.photos/200/300?random=${products.length + 1}` };

    const newProduct = { ...product };
    newProduct.id = products.length + 1;
    newProduct.url = `https://picsum.photos/200/300?random=${products.length + 1}`;

    setProducts([newProduct, ...products]);

  };



  return (
    <Router>
      <div>


        <Header />
        <Navbar isCollapse={true} user={true}/>
        <Routes>
          <Route path="/" element={<Home

            products={products}
            addProduct={addProduct}
            addToCart={addToCart}
            capitalizeFirstLetter={capitalizeFirstLetter}
          />} />

          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
