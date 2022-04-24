import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './Screens/HomeScreen';
import Product from './Screens/ProductScreen';

import { Container } from 'react-bootstrap'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <>
        <Header />

        <main className='py-3'>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </>

    </Router>
  );
}

export default App;
