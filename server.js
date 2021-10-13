const express = require('express');
const productosRouter = require('./serverProductos');
const planillasRouter = require('./serverPlanilla');
const server = express();

const { Router } = express;
const router = Router();

const PORT = 8080;


server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.set('views', './views');
server.set('view engine', 'pug');
server.use(express.static('public'));


server.get('/', (req,res)=>{   
    res.send('Bienvenido')
});

server.use('/productos', planillasRouter);

server.use('/api/productos', productosRouter);

server.listen(PORT , ()=>{
    console.log(`Servidor funcionando en le puerto: ${PORT}`);
})