import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Login from './components/Login';
import Registro from './components/registro';
import Inicio from './components/paginainicio';
import Navbar from './components/header'; 
import Carousel from './components/carrousel'; 
import PopularCategories from './components/maspedidos'; 
import FeaturedProducts from './components/destacados'; 
import Footer from './components/footer';
import AboutUs from './components/nosotros'; 
import OurBrands from './components/marcas'; 
import ProductList from './components/prenda'; 
import Contactos from './components/contacto'; 
import ProductDetail from './components/producto'; 
import CarritoCompras from './components/carrito'; 
import Perfil from './components/perfil'; 



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/index" element={
          <>
            <Navbar />
            <Carousel />
            <PopularCategories />
            <FeaturedProducts />
            <Footer />
          </>
        } />
        <Route path="/sobrenosotros" element={
          <>
            <Navbar />
            <AboutUs />
            <OurBrands />
            <Footer />
          </>
        } />
        <Route path="/tienda" element={
          <>
            <Navbar />
            <ProductList />
            
            <Footer />
          </>
        } />
        <Route path="/producto" element={
          <>
            <Navbar />
            <ProductDetail />
            
            <Footer />
          </>
        } />
        <Route path="/contacto" element={
          <>
            <Navbar />
            <Contactos />
            <Footer />
          </>
        } />
        <Route path="/carrito" element={
          <>
            <Navbar />
            <CarritoCompras />
            <br />
            <br />

            <Footer />
          </>
        } />
        <Route path="/perfil" element={
          <>
            <Navbar />
            <Perfil />
            <br />
            <br />
            
            <Footer />
            
          </>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;
