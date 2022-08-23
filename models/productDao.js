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

const getList = async(cate, start, pageSize) =>{
    try{ 
        if(!cate){cate = null}
        
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
        LIMIT ${start},${pageSize}
            `
            ,)}
    catch(err) {
        const error = new Error('INVALID_DATA_INPUT');
        error.statusCode = 500;
        throw error;}
}

const getOrderByList = async(orderBy, cate, start, pageSize) =>{
    try{ 
        if(!cate){cate = null}
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
        ORDER BY ${orderBy}
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

module.exports = {checkAllProduct, getProductList, getOrderByList, getList, getProduct}