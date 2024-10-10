import { Routes , Route, useLocation} from 'react-router-dom'
import { useState } from 'react'

import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'
import {AboutUs } from './componentes/AboutUs.jsx'
import {Carousel} from './componentes/Carousel.jsx'
import {ShoppingCart } from './componentes/ShoppingCart.jsx'; 
import { Login }  from './componentes/Login.jsx'
import { Register } from './componentes/Register.jsx'

import serviciosImg from './assets/menu/servicios.svg'
import productosImg from './assets/menu/productos.svg'
import { Services } from './pages/Services.jsx'


function App() {
  //Shopping Cart states
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  //Login states
  const [loggedIn, setLoggedIn] = useState(false)

  let location=useLocation();
  let rutaHeader, rutaFooter=null;

  //Show header and footer only when needed
  if (location.pathname!='/login' & location.pathname!='/carrito' & location.pathname!='/register'){
    rutaHeader=comprobarRuta(countProducts, loggedIn, setLoggedIn);
    rutaFooter=<Footer />
  }

  return (
    <>
      {rutaHeader}
      <Routes>
        <Route path="/" element={
          <>
            <AboutUs />
            <Carousel 
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              loggedIn={loggedIn}
            />
          </>
        } />
        <Route path="/login" element={
              <Login 
                loggedIn={loggedIn} 
                setLoggedIn={setLoggedIn} 
              />
            }
          />
        <Route path="/services" element={
          <Services
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
          />
          } />
          <Route path='/register' element={<Register 
            
            />}/>
        <Route path="/carrito" element={
          <ShoppingCart 
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        } />
        
      </Routes>
      {rutaFooter}
    </>
  );
}
  


// Makes if is on products section, the icon and text of first button is Services, else the icon and text was Products.
  const comprobarRuta = (countProducts, loggedIn, setLoggedIn) =>{
  if (location.pathname=="/"){
      return <Header 
      ruta="/services" 
      image={serviciosImg} 
      nombre="Services" 
      countProducts={countProducts} 
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn} />
  }else{
    return <Header 
    ruta="/" 
    image={productosImg} 
    nombre="Productos" 
    countProducts={countProducts}
    loggedIn={loggedIn}
    setLoggedIn={setLoggedIn} />
  }
}
export default App
