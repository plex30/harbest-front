import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../../pages/home/HomePage'
import ProductsPage from '../../pages/products/ProductsPage'


export default function Routes(state, dispatch) {
    return (
        <Switch>
            <Route exact path="/products" state={state} dispatch={dispatch}>
                <ProductsPage></ProductsPage>
            </Route>
            <Route exact path="/" state={state} dispatch={dispatch}>
                <HomePage></HomePage>
            </Route>
        </Switch>
    )
}
