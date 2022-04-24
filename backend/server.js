const dotenv = require('dotenv')
const express = require('express')
const products = require('./data/products')

dotenv.config()

// initialize express
const app = express()

// creating routes
app.get('/', (req, res) => {
    res.send('Api is running....')
})

// All products
app.get('/api/products', (req, res) => {
    res.json(products)
})

// Single Product
app.get('/api/product/:id', (req, res) => {
    const product  = products.find(p => p._id === req.params.id)
    res.json(product)
})


const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`));