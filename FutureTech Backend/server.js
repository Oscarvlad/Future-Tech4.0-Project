const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/Products");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

//Routes

//Home route
app.get("/", (req, res) => {
	res.send("Hello, Welcome to Books API");
});

//order a new Product
app.post('/api/products', async (req, res) => {
	try {
		const product = await Product.create(req.body)
		res.status(200).json(product);
	}
	catch (error) {
		res.status(500).json({ message: "error placing your order", error })
	}

})

//Get Products
app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);

	} catch (error) {
		res.status(500).json({ message: error.message })
	}
});

//Get a single product
app.get('/api/products:id', async (req, res) => {
	try {

		const product = await Product.findById(id.req.params)
		res.send(200).json(product)
	} catch (error) {
		res.status(500).json({ message: 'error fetching product', error })
	}
})

//update a product
app.put('/api/products:id', async (req, res) => {
	try {
		const { id } = req.params;

		const product = await Product.findByIdAndUpdate(id, req.body);

		if (!product) {
			return res.status(404).json({ message: 'Product not found' })
		}

		const updatedProduct = await Product.findById(id)
		res.status(200).json(updatedProduct)

	} catch (error) {
		res.status(500).json({ message: 'error updating product', error })
	}
})

//Delete a product
app.delete('/api/products:id', async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndDelete(id)
		if (!product) {
			res.status(404).json({ message: 'error deleting product' })
		}

		deletedProduct = await Product.findById(id)
		res.status(200).json(deletedProduct)
		res.status(200).json(deletedProduct)

	} catch (error) {
		res.status(500)({ message: 'error deleting order', error })
	}
})


//mongodb connection
console.log("connected to mongodb");
app.listen(port, () => {
	console.log(`server running on ${port}`);
});
	})

	.catch ((error) => {
	console.error("Error connecting to MongoDB:", error);
});
