const express = require('express');
const productosRouter = express.Router();

const ObjetoFS = require('./Objeto');

const productos= new ObjetoFS('./productos.json');

const PORT = 8080;

const producto1 = {
    title: 'Chocolate Jack',
    price: 45,
    thumbnail: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/135/794/products/d_nq_np_665301-mla25956161225_092017-o1-f7e3f3d35fbf9f9e9016001697986976-640-0.jpg'
}


productosRouter.get('/', async (req,res)=>{   
    const productsList = await productos.getAll()
    res.json(productsList)
});

productosRouter.post('/', async (req,res)=>{
    const objetoNuevo = req.body
    await productos.save(objetoNuevo);
    res.send('Se ha cargado un nuevo producto');
})

productosRouter.delete('/:id', async (req,res)=>{
    findID = parseInt(req.params.id);
    console.log(findID);
    await productos.deleteById(findID)
    const productsList = await productos.getAll()

    res.send({
        message: 'Se ha eleiminado el producto',
        data: productsList
    });

})

productosRouter.get('/:id', async (req,res)=>{   
    findID = parseInt(req.params.id);
    const findObjeto = await productos.getById(findID)
    res.json(findObjeto);
});
productosRouter.put('/:id', async (req,res)=>{   
    findID = parseInt(req.params.id);
    const productoPostman = req.body;

    const productoModificado = await productos.update(findID,productoPostman)
    
    res.send({
        message: 'Se modifico el producto',
        data: productoModificado
    });
});

module.exports = productosRouter;