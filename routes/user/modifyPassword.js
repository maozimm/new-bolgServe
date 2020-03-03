const { User } = require('../../model/user');
// hash密码
const bcrypt = require('bcryptjs');
module.exports = async (req, res) => {
    // 查找用户
    const id = req.fields.id.toString();
    const user = await User.findOne({ _id: id });
    const validPassword = await bcrypt.compare(req.fields.password, user.password);
    // 密码错误 响应
    if (validPassword) return res.send({message: '不能使用和上次一样的密码',meta:400});
    const salt = await bcrypt.genSalt(10);
    // 使用盐对密码进行加密
    const password = await bcrypt.hash(req.fields.password, salt);
    await User.findByIdAndUpdate({_id: id}, {password: password}, {new: true}).then(res=>{})
    res.send({ meta: 200 });
};