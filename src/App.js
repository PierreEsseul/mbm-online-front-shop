import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Error404 from './components/Error/Error404';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
// import StripeContainer from './components/Stripe/StripeContainer'
import ParentComponent from './components/Stripe/ParentComponent'


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<ParentComponent />}/>
            {/* <Route path='/cgu' element={<Cgu />} />
            <Route path='/legal-mention' element={<LegalMention />} /> */}
            <Route path='*' element={<Error404/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
