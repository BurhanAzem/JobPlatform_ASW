const http = require("http");
<<<<<<< HEAD
=======
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js'); // Update the path according to your Swagger configuration file

>>>>>>> 8fcfa5a01c02b26b4e2e44134faade0059426f1f
const app = require("./app");
const port = 3003;
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const server = http.createServer(app);
server.listen(port, '127.0.0.1',(req,res)=>{
    console.log("server on 127.0.0.1 port 3003")
});
