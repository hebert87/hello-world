//Import the express module
import express from 'express';

//Define the port number where the server will listen
const PORT =3000;

//Creat an Express application
const app = express();

//Define the "root" path
app.get('/',(req,res) =>{
    //Send a message to the client
    res.send('Hello, World!');
});
//start the server
app.listen(PORT,() =>{
    console.log(`Server is runing at http://localhost:${PORT}`)
})