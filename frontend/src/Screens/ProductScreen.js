import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../Components/Rating'
import axios from 'axios'

// replacing this to fetch from api
// import products from '../products'
import { useParams } from "react-router-dom";

const ProductScreen = ( ) => {

  const { id } = useParams();

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fecthProduct = async () => {
      
      // const { data } = await axios.get(`/api/product/${match.params.id}`)
      const { data } = await axios.get(`/api/product/${id}`)
      // console.log(`My data: ${data}`);

      setProduct(data)
    }
    fecthProduct()
  }, [id])

  // We wont use this : fecth it from the backend
  // const { id } = useParams();
  // const product = products.find((p) => p._id === (id));

  return <>
    <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </ListGroupItem>
          <ListGroupItem>
            Price: $ {product.price}
          </ListGroupItem>
          <ListGroupItem>
            Description: {product.description}
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>
                  Price:
                </Col>
                <Col>
                  <strong>$ {product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  Status:
                </Col>
                <Col>
                  <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className='btn-block' type='button' disabled={product
                .countInStock === 0}>
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </>
}

export default ProductScreen