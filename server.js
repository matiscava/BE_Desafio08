const express = require('express');
const productosRouter = require('./serverProductos');
const planillasRouter = require('./serverPlanilla');
const server = express();

const { Router } = express;
const router = Router();

const PORT = 8080;


server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.set('views', __dirname+'/views');
// server.set('view engine', 'pug');
server.set('view engine', 'ejs');

server.use(express.static(__dirname+'public'));


// server.get('/', (req,res)=>{   
//     res.send('Bienvenido')
// });

server.use('/', planillasRouter);

server.use('/api/productos', productosRouter);

server.listen(PORT , ()=>{
    console.log(`Servidor funcionando en le puerto: ${PORT}`);
})