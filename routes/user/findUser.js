const { User } = require('../../model/user');
module.exports = async (req, res) => {
  var id = req.params.id;
  const user = await User.find({_id: id})
  res.send({ user:user, meta: 200 });
};