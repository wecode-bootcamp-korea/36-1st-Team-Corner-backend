const mainService = require('../services/mainService');

const searchList = async (req, res) => {
    
    try {const list = await mainService.searchList()
        res.status(200).json({data: list})

    }
    catch (err) {console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }}


module.exports = {searchList}