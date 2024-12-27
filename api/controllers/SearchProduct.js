
const Product=require('../model/products');

exports.getProductBySearch = async (req, res, next) => {
    try {
        const { keyword } = req.query;
        if (!keyword) {
            return res.status(400).json({ error: 'Keyword is required for search' });
        }
        const products = await Product.find({ product_title: { $regex: keyword, $options: 'i' } }).populate('product_photos');
        
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        
        res.json(products);
    } catch (err) {
        console.error("Error occurred while searching for products:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
