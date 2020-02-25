const { User } = require('../../model/user');
module.exports = async (req, res) => {
    var pageSize = parseInt(req.query.pageSize);
    var pageNum = parseInt(req.query.pageNum);
    var user = await User.find({},(err,result)=>{
    }).sort({time:1}).limit(pageSize).skip(pageSize*(pageNum-1))
    user.forEach((item)=> {
        for (var key in item) {
            if (key === 'password') {
                item[key] = null
            }
            if (key === 'role') {
                if (item[key] === 'superAdmin') {
                    item[key] = '超级管理员'
                } else if (item[key] === 'admin') {
                    item[key] = '管理员'
                } else {
                    item[key] = '普通用户'
                }
            }
        }
    })
    const length = (await User.find()).length
    res.send({user:user, total:length})
};