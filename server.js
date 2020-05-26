const express= require('express');
const cors= require('cors');
const mongoose= require('mongoose');
require('dotenv').config();


  const app=express();
  const port = process.env.PORT || 4000;


  app.use(cors());
  app.use(express.json());

const uri =process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUriParser: true, useCreateIndex: true })
.then(()=> console.log('connected to db...'))
.catch((err)=> console.log('refuse to connect...',err));
 
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established sucesssfully")
});


const productsRouter= require('./routes/products');


app.use('/products',productsRouter);


  app.listen(port, () => {
      console.log(`server is running on port : ${port}`)
  });