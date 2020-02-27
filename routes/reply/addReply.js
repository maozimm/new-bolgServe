const { Reply } = require('../../model/reply')
module.exports = async (req, res) => {
   const reply = await Reply.create(req.fields)
   res.send({ reply: reply, meta: 200});
}