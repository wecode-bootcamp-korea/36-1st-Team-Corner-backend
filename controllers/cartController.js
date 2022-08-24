const cartService = require("../services/cartService");

const selectAllCart = async (req, res) => {
    try {
        const userId = req.userId;
        
        const selectAllCart = await cartService.selectAllCart(userId);
        return res.status(201).json({
            "data" : selectAllCart
        });
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
 }
module.exports = {selectAllCart}