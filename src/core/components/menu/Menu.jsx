
import React, { useState } from 'react'
import AddProductModal from '../modals/AddProductModal';
import logo from './../../../assets/harbest-market-1.png'
import './Menu.scss'

export default function Menu() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div className="c-menu">
            <div className="wrapper">
                <div className="container-fluid">
                    <header className="header">
                        <img src={logo} alt="logo" className="logo-menu"/>
                    </header>
                    <button onClick={toggle} className="btn-menu">+ Añadir producto</button>
                    <AddProductModal modal={modal} toggle={toggle}></AddProductModal>    
                </div>
                
            </div>
            
        </div>
    )
}
