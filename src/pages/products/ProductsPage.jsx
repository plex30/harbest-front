import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { API } from '../../shared/const/api.const'
import 'bootstrap/dist/css/bootstrap.css';
import Menu from '../../core/components/menu/Menu';

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    const [dropdownOpen, setDropdownOpen] = useState(false);


    const toggle = () => setDropdownOpen(prevState => !prevState);

    const getProducts = () => {
        API.get('/products').then(res => {
            const results = res.data.results
            setProducts(results)
           
        })
    }

    const onChangeState = (e)=>{

        if (e.target.id === 'activo') {
            console.log(1);
            const filterActivos = products.filter(product => product.state === "activo");
            setProducts(filterActivos)
        }else if(e.target.id === 'oculto'){
            console.log(2);
            const filterOcultos = products.filter(product => product.state === "oculto");
            setProducts(filterOcultos)
        }else{
            getProducts()
        }
       

    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
        <Menu></Menu>
            {<Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Filtrar
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={onChangeState}>Quitar filtros</DropdownItem>
                    <DropdownItem onClick={onChangeState} id="activo">Productos Activos</DropdownItem>
                    <DropdownItem onClick={onChangeState} id="oculto">Productos Ocultos</DropdownItem>
                </DropdownMenu>
            </Dropdown>}
            {products && products.map((product, i) => {
                return <Card key={i}>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                        <CardText>{product.description}</CardText>
                        <Button>Editar</Button>
                        <Button>Eliminar</Button>
                    </CardBody>
                </Card>
            })}</div>
    )
}
