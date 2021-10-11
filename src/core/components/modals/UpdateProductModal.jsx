import React, { useState } from 'react'

import { Form, Input, Label, ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap'
import { API } from '../../../shared/const/api.const'
import './UpdateProductModal.scss'

export default function UpdateProductModal({ modal, toggle, product }) {
    
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [farmer, setFarmer] = useState(product.farmer)
    const [state, setState] = useState(product.state)
    const [description, setDescription] = useState(product.description)
    const [img, setImg] = useState(product.img)

    const onChangeName = (e) => {
        if (e.target.value) setName(e.target.value);
    }

    const onChangePrice = (e) => {
        if (e.target.value) setPrice(e.target.value);
    }

    const onChangeFarmer = (e) => {
        if (e.target.value) setFarmer(e.target.value);
    }

    const onChangeState = (e) => {
        if (e.target.value) setState(e.target.value);
    }

    const onChangeDescription = (e) => {
        if (e.target.value) setDescription(e.target.value);
    }

    const onChangeImg = (e) => {
        if (e.target.value) setImg(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
      
        const data = {
            'name': name,
            'price': price,
            'farmer': farmer,
            'state': state,
            'description': description,
            'img': img
        }

        API.patch('/products/update/' + product._id, data, {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

        }).then(async(res) => {
             window.location.reload(false)  
        })
    }
    return (
        product && <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="modalMenu">Editar Producto</ModalHeader>
            <Form onSubmit={onHandleSubmit}>
            <ModalBody>
                <img src={product.img} alt="product" className="update-modal-img"/>
                
                    
                    <Label>Imagen:</Label>
                    
                    <Input type="text" defaultValue={product.img} onChange={onChangeImg} required></Input>
                    <Label>Nombre:</Label>
                    <Input type="text" defaultValue={product.name} onChange={onChangeName} required></Input>
                    <Label>Precio:</Label>
                    <Input type="text" defaultValue={product.price} onChange={onChangePrice} required></Input>
                    <Label>Agricultor:</Label>
                    <Input type="text" defaultValue={product.farmer} onChange={onChangeFarmer} required></Input>
                    <Label>Estado:</Label>
                    <Input type="text" defaultValue={product.state} onChange={onChangeState} required></Input>
                    <Label>Descripition:</Label>
                    <Input type="textarea" defaultValue={product.description} onChange={onChangeDescription} required></Input>
                    
               

            </ModalBody>
            <ModalFooter>
                <button color="primary" type="submit" className="btn-modal-edit">Editar</button>{' '}
                <button color="secondary" onClick={toggle} className="btn-modal-cancel">Cancelar</button>
            </ModalFooter>
            </Form>
        </Modal>
    )
}
