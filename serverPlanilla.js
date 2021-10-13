const express = require('express');

const planillasRouter = express.Router();


const ObjetoFS = require('./Objeto');

const productos= new ObjetoFS('./productos.json');

planillasRouter.get('/', (req,res)=>{
    // res.render('./index.pug');
    res.render('./pages/index.ejs');

})

planillasRouter.post('/productos', async (req, res)=> {
    const objetoNuevo = req.body
    await productos.save(objetoNuevo);
    res.send('Se ha cargado un nuevo producto');
})

planillasRouter.get('/productos', async (req,res)=>{   
    const productsList = await productos.getAll()
    const titulo = 'Lista de Productos';
    // res.render('./productsList.pug', {productsList,titulo})
    res.render('./pages/productsList.ejs', {productsList,titulo})

});

planillasRouter.get('/productos/:id', async (req,res)=>{   
    const findID = parseInt(req.params.id);
    const producto = await productos.getById(findID)
    const titulo = 'Vista de Producto';
    // res.render('./product.pug', {productsList: producto,titulo})
    res.render('./pages/product.ejs', {productsList: producto,titulo})

});



module.exports = planillasRouter;
