import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API } from '../../../shared/const/api.const';

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
                        <ModalBody>
                        <Form onSubmit={onHandleSubmit}>
                        <Label>Imagen:</Label>
                        <Input type="text" onChange={onChangeImg}></Input>
                        <Label>Nombre:</Label>
                        <Input type="text" onChange={onChangeName}></Input>
                        <Label>Precio:</Label>
                        <Input type="text" onChange={onChangePrice}></Input>
                        <Label>Agricultor:</Label>
                        <Input type="text" onChange={onChangeFarmer}></Input>
                        <Label>Estado:</Label>
                        <Input type="text" onChange={onChangeState}></Input>
                        <Label>Descripition:</Label>
                        <Input type="textarea" onChange={onChangeDescription}></Input>
                        <button color="primary" type="submit">Añadir</button>{' '}
                        </Form>
                          
                        </ModalBody>
                        <ModalFooter>
                        
                        <button color="secondary" onClick={toggle}>Cancelar</button>
                        </ModalFooter>
                    </Modal>
    )
}
