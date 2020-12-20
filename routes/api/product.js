const route = require('express').Router();
const Product = require('../../db').Product;

route.get('/', (req, res, next) => {

    Product.findAll(). // return a promise 
    then(products => { // for more info https://www.youtube.com/watch?v=oxLAqN4noA0&list=PLl4Y2XuUavmufEvZlmluM5eWoer1WkLfz
            res.status(200).send(products)
        })
    .catch((err) => {
            res.status(500).send({
                error: "Could not fetch the table products"
            })
    })
});

route.post('/', (req, res, next) => {

    console.log("Hye post");

    // if(isNaN(req.body.price)) {
    //     return res.status(403).send({
    //         error: "Price is not a valid number"
    //     })
    // }

    Product.create({
            name: req.body.name,
            manuFacturer: req.body.manufacturer,
            price: parseFloat(req.body.price),
        })
        .then((products) => {
            res.status(201).send(products)
        })
        .catch((err) => {
            res.status(501).send({
                error: "Could not add the product !"
            })
        })
});

exports = module.exports = {
    route,
};


// It is an e-commerce web app which is made with a back and front end environment

// I learned express.js a framework of Node.js and also i got knowledge of sequelize library


