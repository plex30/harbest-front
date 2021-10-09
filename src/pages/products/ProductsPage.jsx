import React, { useContext, useEffect, useState } from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContext';
import LayoutCardProduct from '../../core/components/cardProduct/LayoutCardProduct';

import Menu from '../../core/components/menu/Menu';
import Pagination from '../../core/components/pagination/Pagination';
import { API } from '../../shared/const/api.const';

export default function ProductsPage() {
    const dispatch = useContext(GlobalDispatchContext)
    const filterProducts = useContext(GlobalStateContext)
    const [products, setProducts] = useState(filterProducts.filterProducts)
    const [pagesSize, setPagesSize] = useState()

    const getProducts = async () => {

        await API.get('/products').then(async(res) => {
             const results = res.data.results
             setProducts(results)
             await dispatch({ type: "SET_FILTER_PRODUCTS", payload: { filterProducts: products } });
            
         })
     }

    const setPageCount = ()=>{
        if (products) setPagesSize(Math.ceil(filterProducts.filterProducts.length /4))
        
    }


     useEffect(() => {
        getProducts()
        setPageCount()
    }, [])


    return (
        <div>
        {products && <Menu setProducts={setProducts} products={products} getProducts={getProducts}></Menu>}
         
        {products.length > 0 ? (
        <>
          <Pagination
            data={products}
            RenderComponent={LayoutCardProduct}
            pageLimit={pagesSize}
            dataLimit={4}
          />
        </>
      ) : (
       <h1>No hay productos que mostrar.</h1>
      )}    
            </div>
    )
}
