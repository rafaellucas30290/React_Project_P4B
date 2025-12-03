import React from 'react'
import BannerAd from './components/BannerAd'
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavbar'
const App = () => {
  return (
    <CustomNavbar>

    <BrowserRouter>
        <Container className='ay-4'
     </BrowserRouter>
    </CustomNavbar>
  )
}

export default App