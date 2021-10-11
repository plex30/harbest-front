import React, { useContext, useEffect, useState } from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContext';
import { Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import Menu from '../../core/components/menu/Menu';
import { confirm } from '../../core/components/confirm/Confirmation';
import { API } from '../../shared/const/api.const';
import UpdateProductModal from '../../core/components/modals/UpdateProductModal';
import './ProductsPage.scss'


export default function ProductsPage() {
  const dispatch = useContext(GlobalDispatchContext)
  const filterProducts = useContext(GlobalStateContext)
  const [products, setProducts] = useState(filterProducts.filterProducts)
  const [product, setProduct] = useState(filterProducts.filterProducts)
  const [limit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = (product) => { setModal(!modal); setProduct(product) }

  const toggleDrop = () => setDropdownOpen(prevState => !prevState);

  const nextPage = () => {
    setSkip(skip + limit)
  }

  const previousPage = () => {
    setSkip(skip - limit)
  }

  const getProducts = async () => {

    await API.get(`/products?limit=${limit}&skip=${skip}`).then(async (res) => {
      const results = res.data.results
      setProducts(results)
      await dispatch({ type: "SET_FILTER_PRODUCTS", payload: { filterProducts: products } });

    })
  }


  const onChangeState = async (e) => {

    const state = e.target.id
    await API.get(`/products?limit=${limit}&skip=${skip}&state=${state}`).then(async (res) => {
      const results = res.data.results
      setProducts(results)
    })

  }

  const onHandleDelete = async (idProduct) => {

    let confirmDel = await confirm("¿Estas seguro que quieres borrar este producto?")
    if (confirmDel) {
      API.delete('/products/delete/' + idProduct).then(res => {
        window.location.reload(false)
      })
    }
  }



  useEffect(() => {
    getProducts()

  }, [skip, limit])


  return (
    <div className="c-products">
      {products && <Menu setProducts={setProducts} products={products} getProducts={getProducts}></Menu>}
      {<Dropdown isOpen={dropdownOpen} toggle={toggleDrop}>
        <DropdownToggle caret style={{ background: 'none', color: '#1c4c23', marginLeft: '2rem', fontWeight: '900', marginTop: '1rem' }}>
          Filtrar
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={onChangeState}>Quitar filtros</DropdownItem>
          <DropdownItem onClick={onChangeState} id="activo">Productos Activos</DropdownItem>
          <DropdownItem onClick={onChangeState} id="oculto">Productos Ocultos</DropdownItem>
        </DropdownMenu>
      </Dropdown>}
      <div className="card-container">
        <div className="row">
          {products && products.map((product, i) =>

            <Card key={i} style={{ width: '375px', margin: '1rem' }} className="col-lg-3 card-item">
              <CardImg top width="100%" src={product.img} alt="Card image cap" style={{ height: '250px', borderRadius: '4px' }} />
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{product.price}</CardSubtitle>
                <CardText >{product.description}</CardText>
                <span>Agricultor: </span><CardSubtitle tag="h6" className="mb-2">{product.farmer}</CardSubtitle>
                {product.state === 'activo' ? <p className="add-state-active">{product.state}</p> : <p className="add-state-hidden">{product.state}</p>}
                </CardBody>
                <CardFooter>
                <div className="container-btn">
                  <button onClick={() => toggleModal(product)} className="btn-edit">Editar</button>
                  <button onClick={() => onHandleDelete(product._id)} className="btn-delete">Eliminar</button>
                </div>
                </CardFooter>
            </Card>
          )

          }
        </div>
      </div>
      {<UpdateProductModal toggle={toggleModal} modal={modal} product={product}></UpdateProductModal>}
      <div className="pagination-btn">
        {skip === 0 ? <button onClick={previousPage} className="previous-btn-disabled" disabled>Anterior </button> :
          <button onClick={previousPage} className="previous-btn-active">Anterior </button>}
        {products.length < 8 ? <button onClick={nextPage} className="next-btn-disabled" disabled> Siguiente</button> :
          <button onClick={nextPage} className="next-btn-active"> Siguiente</button>}
      </div>
    </div>
  )
}
