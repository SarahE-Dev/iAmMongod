const Product = require('../model/Product');


module.exports = {
    getAllProducts: ()=>{
        return new Promise((res,rej)=>{
            Product.find({})
            .then(payload=>{
                res(payload)
            })
            .catch(err=>{
                rej(err)
            })
        })
    },
    createProduct: (body)=>{
        return new Promise((res, rej)=>{
            let newProduct = new Product({
                productName: body.productName
            })
            return newProduct.save()
            .then(newProduct=>{
                res(newProduct)
            })
            .catch(err=>{
                rej(err)
            })
        })
    },
    getProductByID: (id)=>{
        return new Promise((res, rej)=>{
            Product.findById({_id: id})
            .then(payload=>{
                res(payload)
            })
            .catch(err=>{
                rej(err)
            })
        })
    },
    updateProductByID: (id, body)=>{
        return new Promise((res, rej)=>{
            Product.findByIdAndUpdate({_id: id}, body, {new: true})
            .then(payload=>{
                res(payload)
            })
            .catch(err=>{
                rej(err)
            })
        })
    },
    deleteProductByID: (id)=>{
        return new Promise((res, rej)=>{
            Product.findByIdAndDelete({_id: id})
            .then(payload=>{
                res(payload)
            })
            .catch(err=>{
                rej(err)
            })
        })
    }

}