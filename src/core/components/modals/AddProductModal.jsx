import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API } from '../../../shared/const/api.const';
import './AddProductModal.scss'

export default function AddProductModal({modal, toggle}) {

    const [name, setName]= useState(null)
    const [price, setPrice]= useState(null)
    const [farmer, setFarmer]= useState(null)
    const [state, setState]= useState(null)
    const [description, setDescription]= useState(null)
    const [img, setImg]= useState(null)

    const onChangeName = (e)=>{
        if (e.target.value) setName(e.target.value);
    }

    const onChangePrice = (e)=>{
        if (e.target.value) setPrice(e.target.value);
    }

    const onChangeFarmer = (e)=>{
        if (e.target.value) setFarmer(e.target.value);
    }

    const onChangeState = (e)=>{
        if (e.target.value) setState(e.target.value);
    }

    const onChangeDescription = (e)=>{
        if (e.target.value) setDescription(e.target.value);
    }

    const onChangeImg = (e)=>{
        if (e.target.value) setImg(e.target.value);
    }

    const onHandleSubmit = (e)=>{
      
       const data = {
            'name': name,
            'price': price,
            'farmer': farmer,
            'state': state,
            'description': description,
            'img': img
        }

        API.post('/products', data, {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

        }).then(res => {
            console.log(res);
            e.preventDefault()
        })
    }

    
    return (
        <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle} className="modalMenu">Añadir Producto</ModalHeader>
                        <Form onSubmit={onHandleSubmit}>
                        <ModalBody>
                        <Label>Imagen:</Label>
                        <Input type="text" onChange={onChangeImg} placeholder="ej: https://www.unplashc.com/pepino.jpg" required></Input>
                        <Label>Nombre:</Label>
                        <Input type="text" onChange={onChangeName} placeholder="ej: Acelga Roja Ecológica (Caja de 3 kgs) (2.00€/kg)" required></Input>
                        <Label>Precio:</Label>
                        <Input type="text" onChange={onChangePrice} placeholder="ej: 6.00€ “IVA Excl.”" required></Input>
                        <Label>Agricultor:</Label>
                        <Input type="text" onChange={onChangeFarmer} placeholder="ej: Mariano García de Estremera (Madrid)." required></Input>
                        <Label>Estado: (activo o oculto)</Label>
                        <Input type="text" onChange={onChangeState} placeholder="ej: activo o oculto" required></Input>
                        <Label>Descripition:</Label>
                        <Input type="textarea" onChange={onChangeDescription} placeholder="ej: Acelgas de penca fina, recién recolectadas en la huerta madrileña." required></Input>
                        
                       
                          
                        </ModalBody>
                        <ModalFooter>
                        <button color="primary" type="submit" className="btn-modal-add">Añadir</button>{' '}
                        <button color="secondary" onClick={toggle} className="btn-cancel">Cancelar</button>
                        </ModalFooter>
                        </Form>
                    </Modal>
    )
}
