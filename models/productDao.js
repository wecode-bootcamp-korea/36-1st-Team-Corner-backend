const {appDataSource} = require("./dataSource")

const checkAllProduct = async() =>{
    try{
        const [AllProduct] = await appDataSource.query(
            `SELECT COUNT(*) 
            FROM products
            `)
        return Object.values(AllProduct)[0]
        
    }
    catch(err){ const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 500;
    throw error;}
}

const getOrderByList = async(start, pageSize, cate, orderBy) =>{
    try{ 
        if(!cate){cate = null}
        if(!orderBy){orderBy = null}
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
        WHERE 
            CASE WHEN ${cate} IS NULL THEN p.category_id IS NOT NULL 
        WHEN ${cate} IS NOT NULL THEN p.category_id = ${cate} END
        ORDER BY 
            CASE WHEN ${orderBy} IS NULL THEN p.id 
            WHEN ${orderBy} IS NOT NULL THEN PRICE END
        LIMIT ${start},${pageSize}
        `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

const getProductList = async(word) =>{
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

module.exports = {checkAllProduct, getProductList, getOrderByList, getProduct}