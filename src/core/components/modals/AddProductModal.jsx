import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { API } from '../../../shared/const/api.const';

export default function AddProductModal({modal, toggle}) {

    const [name, setName]= useState(null)
    const [price, setPrice]= useState(null)
    const [farmer, setFarmer]= useState(null)
    const [state, setState]= useState(null)
    const [description, setDescription]= useState(null)

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

    const onHandleSubmit = (e)=>{
      e.preventDefault()
      /* const data = new FormData();
      data.append('name', name)
      data.append('price', price)
      data.append('farmer', farmer)
      data.append('state', state)
      data.append('description', description)
      console.log(data); */

      const data ={
          'name': name,
          'price': price,
          'farmer': farmer,
          'state': state,
          'description': description
      }

      API.post('/products', data,{
        
            headers: {
                'Accept': 'application/json',
        'Content-Type': 'application/json',
            }
        
      }).then(res=>{
          console.log(res);
      })
    }

    
    return (
        <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle} className="modalMenu">Añadir Producto</ModalHeader>
                        <ModalBody>
                        <Form onSubmit={onHandleSubmit}>
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
