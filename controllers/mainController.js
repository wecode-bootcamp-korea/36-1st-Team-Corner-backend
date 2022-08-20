const mainService = require('../services/mainService');

const searchList = async (req, res) => {
    
    const pageInfo = req.query;
    const page = parseInt(pageInfo.page);
    const pageSize = parseInt(pageInfo.pageSize);
    
    if ( !page || !pageSize ) {
        return res.status(400).json({ message: 'NULL_VALUE' });
    }
    try {const list = await mainService.searchList(page, pageSize)
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}


module.exports = {searchList}