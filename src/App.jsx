import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home_page/Home'
import './styles/global.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App