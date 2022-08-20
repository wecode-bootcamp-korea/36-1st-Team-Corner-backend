const {appDataSource} = require("./dataSource")

const getCategoryList = async(cate) =>{
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
        WHERE p.category_id = ${cate}
            `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

const getProductsList = async(word) =>{
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
        WHERE p.name like '%${word}%'
            `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

module.exports = {getCategoryList, getProductsList}