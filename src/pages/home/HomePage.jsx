import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/harbest-market-1.png'
import './HomePage.scss'

export default function HomePage() {
    return ( 
    <>
    <img src={logo} alt="logo" className="logo"/>
    <div className="square-1"></div>
    <div className="c-home">
        <Link className="c-home__link" to="/products">Listado de productos</Link>
    </div>
    </>
    )
}