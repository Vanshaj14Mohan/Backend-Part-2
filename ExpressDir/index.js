//We will write our express code in this.
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

const express = require("express"); //this is actually a function which we execute.
const app = express() //and here we store the value returned by this function in variable app, And this app here is an object.
const port = 3000; // or 8080, can be used for making custom servers.

// console.dir(app); to see the properties of app object.

app.get("/", (req,res)=>{
    res.send("Testing was Successfully done");
});

app.listen(port, () =>{
    console.log(`Server is running on port, ${port}`)
});

console.dir(app);

//Ports are logical endpoints of a network connection that is used to exchange information between a web server and a web client.
// Ports are used to identify specific processes running on a computer.