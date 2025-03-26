const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase=require('./Config/ConnectDatabase');
const cors=require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')});



const Products=require('./Routes/Product');
const Orders=require('./Routes/Order');

connectDatabase();
app.use(express.json()); 
app.use(cors());
app.use('/api/v1',Products);
app.use('/api/v1',Orders);

app.listen(process.env.PORT ,()=>{
    console.log(`server in  port ${process.env.PORT} in ${process.env.NODE_ENV} `)
});



