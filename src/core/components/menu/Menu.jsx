
import React, { useContext, useState } from 'react'
import AddProductModal from '../modals/AddProductModal';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import logo from './../../../assets/harbest-market-1.png'
import { GlobalDispatchContext, GlobalStateContext } from '../../../context/GlobalContext';
import './Menu.scss'

export default function Menu({ setProducts, products, getProducts }) {

    const [modal, setModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    console.log(products);
    const toggle = () => setModal(!modal);
    const toggleDrop = () => setDropdownOpen(prevState => !prevState);

    const onChangeState = (e) => {

        if (e.target.id === 'activo') {
            const filterActivos = products.filter(product => product.state === "activo");
            setProducts(filterActivos)
        } else if (e.target.id === 'oculto') {

            const filterOcultos = products.filter(product => product.state === "oculto");
            setProducts(filterOcultos)
        } else {
            getProducts()
        }


    }
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
            {<Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                        <DropdownToggle caret style={{background: 'none', color: '#1c4c23', marginLeft: '2rem', fontWeight: '900', marginTop: '1rem'}}>
                            Filtrar
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={onChangeState}>Quitar filtros</DropdownItem>
                            <DropdownItem onClick={onChangeState} id="activo">Productos Activos</DropdownItem>
                            <DropdownItem onClick={onChangeState} id="oculto">Productos Ocultos</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>}
        </div>
    )
}
