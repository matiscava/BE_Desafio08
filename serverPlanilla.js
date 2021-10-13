const express = require('express');

const planillasRouter = express.Router();


const ObjetoFS = require('./Objeto');

const productos= new ObjetoFS('./productos.json');

planillasRouter.get('/', async (req,res)=>{   
    const productsList = await productos.getAll()
    console.log(productsList);
    res.render('./index.pug', {productsList})
});



module.exports = planillasRouter;
