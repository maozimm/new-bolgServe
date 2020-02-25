const { Category } = require('../../model/categories')
module.exports = async (req, res) => {
   const categories = await Category.find();
   res.send({category: categories, meta: 200})
}