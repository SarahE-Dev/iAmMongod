const express = require('express');
const router = express.Router();

const productController = require('./controller/productController')

const {
    getAllProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
} = productController;

router.get('/get-all-products', (req, res)=>{
    getAllProducts()
    .then((payload)=>{
        res.json({
            message: "Success", data: payload
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message: "error", error
        })
    })
})

router.post('/create-product', (req,res)=>{
    createProduct(req.body)
    .then((payload)=>{
        res.json({message: "success", data: payload})
    })
    .catch(err=>{
        res.status(500).json({message: 'error', err})
    })
})

router.put('/update-product/:id', (req, res)=>{
    updateProductByID(req.params.id, req.body)
    .then(payload=>{
        res.json({message: "success", data: payload})
    })
    .catch(err=>{
        res.status(500).json({message: "error", err})
    })
})

router.get('/get-product/:id', (req, res)=>{
    getProductByID(req.params.id)
    .then(payload=>{
        res.json({message: "succes", data: payload})
    })
    .catch(err=>{
        res.status(500).json({message: 'error', err})
    })
})

router.delete('/delete-product/:id', (req, res)=>{
    deleteProductByID(req.params.id)
    .then(payload=>{
        res.json({message: "success", data: payload})
    })
    .catch(err=>{
        res.status(500).json({message: 'error', err})
    })
})




module.exports = router;