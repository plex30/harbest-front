import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/harbest-market-1.png'
import flower from './../../assets/flor.jpg'
import strawerry from './../../assets/cereza.jpg'
import zucchini from './../../assets/calabacin.jpg'
import eggplant from './../../assets/berenjena.jpg'
import tomato from './../../assets/tomate.jpg'
import './HomePage.scss'

export default function HomePage() {
    return ( 
    <div className="app">
    <img src={logo} alt="logo" className="logo slide-in-top"/>
    {/* <div className="square-1"></div> */}
    <div className="c-home">
    <div className="c-img">
        <img src={flower} alt="flower" className="c-img__item1 slide-in-left"></img>
        <img src={strawerry} alt="strawerry" className="c-img__item2 slide-in-left"></img>
        <img src={zucchini} alt="zucchini" className="c-img__item3 slide-in-bottom"></img>
        <img src={eggplant} alt="eggplant" className="c-img__item4 slide-in-right"></img>
        <img src={tomato} alt="tomato" className="c-img__item5 slide-in-right"></img>
    </div>
        <Link className="c-home__link slide-in-right" to="/products">Listado de productos</Link>
    </div>
    </div>
    )
}