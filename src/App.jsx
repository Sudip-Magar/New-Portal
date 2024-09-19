import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import portalData from './data'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Detail from './Component/Detail'

function App() {
  const [data,setData]=useState([])
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cat/:cid' element={<Category/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
