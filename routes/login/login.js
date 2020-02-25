const { User, validateLogin } = require('../../model/user');
// hash密码
const bcrypt = require('bcryptjs');
// 工具
const _ = require('lodash');

module.exports = async (req, res) => {
    // 数据格式校验
    console.log(req.query);
	const { error } = validateLogin(req.query);
	// 格式不符合要求
	if (error) return res.send({message: error.message,meta:400})
	// 查找用户
	let user = await User.findOne({email: req.query.email});
	// 如果用户不存在 响应
	if (!user) return res.send({message: '邮箱地址或者密码错误',meta:400});
	// 如果用户存在 验证密码 返回布尔值
	const validPassword = await bcrypt.compare(req.query.password, user.password);
	// 密码错误 响应
	if (!validPassword) return res.send({message: '邮箱地址或者密码错误',meta:400});
	// 将用户信息存储在session中
	// req.session.userInfo = user;
	// 响应
	res.send(_.pick(user, ['nickName', 'email', 'role', 'avatar', '_id', 'status', 'createTime']));
};
