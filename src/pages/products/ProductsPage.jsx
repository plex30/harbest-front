import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { API } from '../../shared/const/api.const'
import 'bootstrap/dist/css/bootstrap.css';

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        API.get('/products').then(res => {
            const results = res.data.results
            setProducts(results)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>{products && products.map((product) => {
            return <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                    <CardText>{product.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        })}</div>
    )
}
