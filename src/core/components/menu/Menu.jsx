import React, { useState } from 'react'
import AddProductModal from '../modals/AddProductModal';

import logo from './../../../assets/harbest-market-1.png'


export default function Menu() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <div className="wrapper">
                <div className="container-fluid">
                    <header className="header">
                        <img src={logo} alt="logo" />
                    </header>
                    <button onClick={toggle}>Añadir producto</button>
                    <AddProductModal modal={modal} toggle={toggle}></AddProductModal>
                </div>
            </div>

        </div>
    )
}
