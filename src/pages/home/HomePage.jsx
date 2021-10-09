import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContext'
import { API } from '../../shared/const/api.const'
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