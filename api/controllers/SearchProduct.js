
const Product=require('../model/products');

exports.getProductBySearch=async(req,res,next)=>{
    try {
        const { keyword } = req.query;
        const products = await Product.find({ product_title: { $regex: keyword, $options: 'i' } }).populate('product_photos');

        res.json(products);
    } catch (err) {
        console.log("error");
        res.status(400).json({ error: err.message });
    }
}