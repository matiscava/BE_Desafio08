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


productosRouter.get('/', (req,res)=>{   
    res.send(productos.getAll())
});

productosRouter.post('/', (req,res)=>{
    productos.save(req.body);
    res.send('Se ha cargado un nuevo producto');
})

productosRouter.delete('/:id',(req,res)=>{
    findID = parseInt(req.params.id);
    productos.deleteById(findID)
    res.send('Se ha eleiminado el producto', productos.getAll());

})

productosRouter.get('/:id', (req,res)=>{   
    findID = parseInt(req.params.id);
    const findObjeto = productos.getById(findID)
    
    res.send(findObjeto);
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