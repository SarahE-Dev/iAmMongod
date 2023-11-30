const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(logger('dev'));
app.use(express.json());

mongoose
    .connect('mongodb://127.0.0.1:27017/product-list')
    .then(()=>{
        console.log('MONGO DB CONNECTED');
    })
    .catch((err)=>{
        console.log(err);
    })

const productRouter = require('./product/productRouter')

app.use('/api/products', productRouter)

// app.get('/', (req, res)=>{
//     res.json({message: 'app connected'})
// })

app.listen(3000, ()=>{
    console.log('Server started on Port 3000');
})