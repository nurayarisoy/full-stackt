import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Details from "../pages/details/Details"
import Login from '../pages/login/Login'

const AppRouter = () => {
    return (
        <BrowserRouter>
           <Navbar/>
            <Routes>
                <Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/details"  element={<Details/>}/>
                    <Route path="/login"  element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
