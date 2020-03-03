const { User } = require('../../model/user');
// hash密码
const bcrypt = require('bcryptjs');
module.exports = async (req, res) => {
    // 查找用户
    const id = req.fields.id.toString();
    const user = await User.findOne({ _id: id });
    const validPassword = await bcrypt.compare(req.fields.password, user.password);
    // 密码错误 响应
    if (!validPassword) return res.send({message: '旧密码错误',meta:400});
    res.send({ meta:200 });
};