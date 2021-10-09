import React, { useContext, useEffect, useState } from 'react'
import UpdateProductModal from '../modals/UpdateProductModal'
import { GlobalDispatchContext, GlobalStateContext } from '../../../context/GlobalContext';
import { confirm } from '../../components/confirm/Confirmation';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import Pagination from "react-js-pagination";
import { API } from '../../../shared/const/api.const'
import 'bootstrap/dist/css/bootstrap.css';


export default function LayoutCardProduct(props) {
    
    const product = props.data
  
    const filterProducts = useContext(GlobalStateContext)
    const [products, setProducts] = useState(props.products)
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const toggleModal = (product) => { setModal(!modal); }
    
    const toggle = () => setDropdownOpen(prevState => !prevState);

    
    const onChangeState = (e)=>{

        let filtProd = filterProducts.filterProducts
   
        if (e.target.id === 'activo') {
            const filterActivos = filtProd.filter(product => product.state === "activo");
            setProducts(filterActivos)
        }else if(e.target.id === 'oculto'){
            const filterOcultos = filtProd.filter(product => product.state === "oculto");
            setProducts(filterOcultos)
        }else{
            setProducts(filtProd)
        }
       
    }

    const onHandleDelete = (idProduct)=>{
        let confirmDel = confirm("¿Estas seguro que quieres borrar este producto?")
        if (confirmDel){
            API.delete('/products/delete/'+idProduct).then(res=>{
              
            })
        }
    }

    
   

    return (
        <>
       {/*  {<Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Filtrar
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={onChangeState}>Quitar filtros</DropdownItem>
                    <DropdownItem onClick={onChangeState} id="activo">Productos Activos</DropdownItem>
                    <DropdownItem onClick={onChangeState} id="oculto">Productos Ocultos</DropdownItem>
                </DropdownMenu>
            </Dropdown>}
             */}
            
            {product && <p>holoa</p> &&
                 <Card >
                    <CardImg top width="100%" src={product.img} style={{width: '200px'}} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                        <CardText>{product.description}</CardText>
                        <Button onClick={()=>toggleModal(product)}>Editar</Button>
                        <Button onClick={onHandleDelete}>Eliminar</Button>
                    </CardBody>
                </Card>
            }
            
           
        {product && <UpdateProductModal toggle={toggleModal} modal={modal} product={product}></UpdateProductModal>}
    </>
    )
}
