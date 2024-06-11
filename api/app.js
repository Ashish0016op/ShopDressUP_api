require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB=process.env.MONGODB_URL;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connections successfull");
}).catch((err)=>{
    console.log(err);
    console.log("no connections");
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const cors = require('cors');
const productRoute=require('./routes/productData');
const photoRoute=require('./routes/photo');
const SearchRoute=require('./routes/SearchProduct');
app.use(cors());
app.use(express.json());
app.use(productRoute);
app.use(photoRoute);
app.use(SearchRoute);


