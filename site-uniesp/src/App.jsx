import React from 'react'
import Inicial from './pages/Inicial'
import Dpo from './pages/Dpo'
import Faculdade from './pages/Faculdade'
import Noticias from './pages/Noticias'
import CustomNavbar from './components/CustomNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <CustomNavbar/>
          <Routes>
            <Route path='/' element={<Inicial/>}/>
            <Route path="/a-faculdade" element={<Faculdade />} />
            <Route path="/dpo-lgpd" element={<Dpo/>}/>
            <Route path="/noticias" element={<Noticias/>}/>
          </Routes>
        </BrowserRouter>

        <Footer />
    </div>
    
  )
}

export default App