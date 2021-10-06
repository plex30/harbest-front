import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../../pages/home/HomePage'
import ProductsPage from '../../pages/products/ProductsPage'


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/products">
                <ProductsPage></ProductsPage>
            </Route>
            <Route exact path="/">
                <HomePage></HomePage>
            </Route>
        </Switch>
    )
}
