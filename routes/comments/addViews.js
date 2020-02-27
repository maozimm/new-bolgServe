const { View } = require('../../model/view')
module.exports = async (req, res) => {
   const views = await View.create(req.fields);  
   res.send({views: views, meta: 200});
}