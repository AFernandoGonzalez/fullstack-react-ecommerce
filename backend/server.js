const express = require('express')
const products = require('./data/products')

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

app.listen(8000, console.log('server running on port 8000'));