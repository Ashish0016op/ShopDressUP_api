const Product = require('../model/products');
exports.getAllProduct=async(req,res,next)=>{
    try{
        const allProduct = await Product.find().populate('product_photos');
        res.status(200).json(allProduct);
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
exports.postProduct=async(req,res,next)=>{
    try {
        const data=req.body;
        console.log("data is",data);
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

}

exports.getProduct = async (req, res,next) => {
    try {
        const product = await Product.findById(req.params.id).populate('product_photos');
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};