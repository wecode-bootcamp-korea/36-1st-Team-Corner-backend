const {appDataSource} = require("./dataSource")

const getProducts = async(start, pageSize) =>{
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
        FROM products LIMIT ${start},${pageSize}
            `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

module.exports = {getProducts}