const { User, validateLogin } = require('../../model/user');
// hash密码
const bcrypt = require('bcryptjs');
module.exports = async (req, res) => {
    // 查找数据库中有没有这个邮箱
    let user = await User.findOne({email: req.fields.email});
    if (user) {
        res.send({message: '邮箱已存在', meta: 400});
    } else {
        const salt = await bcrypt.genSalt(10);
		// 使用盐对密码进行加密
		const password = await bcrypt.hash(req.fields.password, salt);
		const user = await User.create({
			nickName: req.fields.nickName,
			email: req.fields.email,
			password: password,
			role: 'normal',
			avatar: null,
			createTime: new Date,
			status: 1
        });
        res.send({message: '注册成功', meta:200})
    }
  
};