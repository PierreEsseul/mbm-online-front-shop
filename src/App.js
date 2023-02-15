import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error/Error404";
import HomePage from "./components/HomePage/HomePage";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import Cgu from "./components/LegalMention/Cgu";
import LegalMention from "./components/LegalMention/LegalMention";
import ParentComponent from "./components/Stripe/ParentComponent";
import PaymentSuccess from "./components/Stripe/PaymentSuccess/PaymentSuccess";

import getShopHandler from './components/Back/GetShop';

function App() {

  const [data, setData] = useState(null);

  const slugify = window.location.hostname.split(".")[0];
  console.log(slugify);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getShopHandler(slugify);
      console.log("Value result : ", result);
      setData(result.shop);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header data={data} />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage data={data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact data={data} />} />
          <Route path="/payment" element={<ParentComponent />} />
          <Route path="/payment_success" element={<PaymentSuccess />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/legal-mention" element={<LegalMention />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
