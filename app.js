const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const Authroute = require('./routes/AuthRoute')
const Tutorialroute = require("./routes/tutorial.route");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/auth',Authroute)
app.use('/tut',Tutorialroute)


const port = 3000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port,()=>{
  console.log("listening port 3000.......")
});
app.get('/',async(req,res)=>{
  console.log("welcm")
  res.send("welcome");
  
})
module.exports = app;