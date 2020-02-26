const { View } = require('../../model/view')
module.exports = async (req, res) => {
   const views = await View.create(req.fields);  
   const x = await View.find();
   res.send({views: views, meta: 200});
}