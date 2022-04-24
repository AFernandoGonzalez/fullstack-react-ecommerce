import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../Components/Product'

// '../products' is getting replaced by api
// import products from '../products'
// In function based components we use useState
import { useState, useEffect } from 'react'
import axios from 'axios'


const HomeScreens = () => {

  const [products, setProducts] = useState([])

  // useEffect to make a request to the server
  // as soon the component loads this useEffect fires off
  useEffect(()=>{
    // onces the components load : make the Axios request
    const fetchProducts = async () => {
      // destructure the data directly
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    // call the functions
    fetchProducts()

    // [] pass an array of dependencies 
  }, [])

  return (
    <>
      <h1>Lastes Products</h1>
      <Row >
        {products.map((product) => {
          return <Col key={product._id} sm={12} md={6} lg={4}>
          <Product product={product}/>
        </Col> 
        })}
      </Row>
    </>
  )
}

export default HomeScreens