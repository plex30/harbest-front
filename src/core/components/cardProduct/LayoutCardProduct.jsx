import React, { useContext, useEffect, useState } from 'react'
import UpdateProductModal from '../modals/UpdateProductModal'
import { GlobalDispatchContext, GlobalStateContext } from '../../../context/GlobalContext';
import { confirm } from '../../components/confirm/Confirmation';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import Pagination from "react-js-pagination";
import { API } from '../../../shared/const/api.const'
import 'bootstrap/dist/css/bootstrap.css';
import './LayoutCardProduct.scss'


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
            {product &&
                 <Card style={{width: '350px', margin:'1rem'}}>
                    <CardImg top width="100%" src={product.img}  alt="Card image cap" style={{height: '250px'}}/>
                    <CardBody>
                        <CardTitle tag="h5">{product.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                        <CardText style={{height: '80px'}}>{product.description}</CardText>
                        <span>Agricultor: </span><CardSubtitle tag="h7" className="mb-2">{product.farmer}</CardSubtitle>
                        {product.state === 'activo' ? <p className="add-state-active">{product.state}</p> : <p className="add-state-hidden">{product.state}</p>}
                        <div className="container-btn">
                        
                        <Button onClick={()=>toggleModal(product)} className="btn-edit">Editar</Button>
                        <Button onClick={onHandleDelete} className="btn-delete">Eliminar</Button>
                        </div>
                    </CardBody>
                </Card>
            }
            
           
        {product && <UpdateProductModal toggle={toggleModal} modal={modal} product={product}></UpdateProductModal>}
    </>
    )
}
