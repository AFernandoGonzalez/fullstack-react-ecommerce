import React from 'react'

import products from '../products'

import {Row, Col} from 'react-bootstrap'

import Product from '../Components/Product'

const HomeScreens = () => {
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