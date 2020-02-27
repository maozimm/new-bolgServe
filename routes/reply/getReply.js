const { Reply } = require('../../model/reply')
module.exports = async (req, res) => {
   const id = req.query.id;
   var obj = {}
   async function loop() {
      for(let i = 0; i < id.length; i++) {
         obj[id[i]] = await Reply.find({ comment: id[i] }).populate(['author','post']);
      }
   }
   await loop(); 
   res.send({ replys: obj, meta: 200});
}