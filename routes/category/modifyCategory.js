const { Category } = require('../../model/categories')
module.exports = async (req, res) => {
    var id = req.params.id.toString();
    await Category.findByIdAndUpdate({_id: id}, {title: req.fields.title}, {new: true}).then(res=>{});
    res.send({ meta: 200})
}