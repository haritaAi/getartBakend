require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const  bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//my routes
const authRoutes = require('./routes/auth');


const app = express();
app.use(cors());


 //Middleware
 app.use(bodyParser.json());
 app.use(cookieParser());



//DB connection

mongoose.connect(process.env.DATABASE,{  useNewUrlParser: true,
                                          useUnifiedTopology: true,
                                          useCreateIndex : true  }).then(() => 
                                          console.log("DB   CONNECTED.........")).catch(err => console.log("DATABASE CONNECTION ERROR...",err));
  
//Routes                                          
app.use("/api",authRoutes);



//PORT
const port  = process.env.PORT  || 8000;

app.get('/', (req, res) => res.status(200).send('hello beautiful world'));
//Startin server
app.listen(port, ()=> {
    console.log(`app is running at ${port}`);
});  