const path = require('path')
const productsRoutes = require('./routes')
const Products = require('./model/products')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080

const products = new Products()

app.set('views','./views');
app.set('view engine','pug')

// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/productos',productsRoutes)

app.get('/',(req,res)=>{
    res.render('index')
})

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ err, message: 'Something went wrong, sorry' });
});

app.listen(PORT, ()=>console.log("Ready an running on port", PORT))

connectedSever.on("error", (error)=> {
    console.log(`Something Went Wrong -> ERROR: `, error.message);
});