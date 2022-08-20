const {appDataSource} = require("./dataSource")

const getProduct = async(id) =>{
    try{ 
        return await appDataSource.query(
        `SELECT 
            id,
            name,
            price,
            detail,
            thumbnail_image_url,
            stock,
            category_id
        FROM products p
        WHERE p.id = ${id}
            `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

module.exports = {getProduct}