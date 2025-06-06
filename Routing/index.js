const express = require('express')
const app = express()
const port = 3000

//Creating different routes now:
app.get('/', (req, res) => {
  res.send('Route Path');
});

app.get("/about", (req,res)=>{
    res.send("You contacted about page");
});

app.get("/contact", (req,res)=>{
    res.send("You searched for contact page");
});

app.get("/search", (req,res)=>{
    res.send("You searched for something");
});

//using req.params, Path parameters
// app.get("/:username/:id", (req,res)=>{
//   console.log(req.params); //req.params =>So it Shows the parameter of our request.
//   let {username, id} = req.params;
//   res.send(`Welcome to the page of @${username}`);
//   res.send("Username Page");
// })

//"*" means to include all the routes incluing above ones and if someone sends req on any other route, it will show this message.
// app.get("*", (req,res)=>{
//     res.send("404 Error Path does not exist")
// })

//Also a post request can be created in the same way as get request
app.post("/", (req,res)=>{
    res.send("You send a post request to the root");
});

//Using Query Strings here: /find?q=.....
app.get("/find", (req,res)=>{
  // console.log(req.query);
  let {q} = req.query;
  if(!q){
    return res.send(`Nothing Searched`);
  }
  // res.send("Found it");
  res.send(`Found results for query ${q}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});