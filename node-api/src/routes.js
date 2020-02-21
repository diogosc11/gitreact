const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    // Product.create({
    //     title: "Celta 2009 Rebaixado",
    //     description: "O malcriado",
    //     url: "https://www.motosenvenenadas.com.br"
    // });
    
    return (res.send("Hello Gugu"));
});

module.exports = routes;
