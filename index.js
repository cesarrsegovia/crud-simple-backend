const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const app = express()

//permite devolver json en peticiones
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products', productRoute)

//se muestra un mensaje en la pagina predeterminada 
app.get('/', (req, res) => {
    res.send("Hello from node API server updated")
});






//conecta con la base de datos de mongo db 
mongoose.connect("mongodb+srv://admin:ZZAAj3s3zDOBi6CD@nodeapibackendtest.pazvask.mongodb.net/Node-API?retryWrites=true&w=majority&appName=nodeapibackendtest")
    //probamos que este conectado exitosamente
    .then(() => {
        console.log("Conectado a la base de datos");
        //se verifica que el servidor este corriendo en el puerto determinado.
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("error");
    })