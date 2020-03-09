const { Category } = require('../../model/categories')
module.exports = async (req, res) => {
   const categories = await Category.create(req.fields)
   res.send({category: categories, meta: 200})
}