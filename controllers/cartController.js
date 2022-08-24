const cartService = require("../services/cartService");

const getCarts = async (req, res) => {
    try {
        const userId = req.userId;
        
        const allCart = await cartService.getCarts(userId);
        return res.status(201).json({
            "data" : allCart
        });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
 }
module.exports = {getCarts}