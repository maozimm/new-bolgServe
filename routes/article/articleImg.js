const { Post } = require('../../model/article')
module.exports = async (req, res) => {
  var path = req.files.file.path;
  res.send({ path: path, meta:200});
}