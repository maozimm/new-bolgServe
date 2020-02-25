const  express = require('express');
const cors = require('cors');
const  app = express();
const path = require('path');
// 处理文件上传
const formidableMiddleware = require('express-formidable');
// 解决跨域中间件
app.use(cors())
// 连接数据库
// 处理文件上传路径
app.use(formidableMiddleware({
	// 文件上传目录
	uploadDir: path.join(__dirname, 'public', 'uploads'),
	// 最大上传文件为2M
	maxFileSize: 2 * 1024 * 1024,
	// 保留文件扩展名
	keepExtensions: true
}));
// 静态资源访问
app.use(express.static(path.join(__dirname, './public/uploads')));
require('./model/connection')
// 导入user
const { User } = require('./model/user')
const { Category } = require('./model/categories')
const { Post } = require('./model/article')
// 加密模块
const bcrypt = require('bcryptjs');
// 生成默认管理员账号
User.findOne({'email': 'maozi@qq.com'}).then(async result => {
	if (result == null) {
		console.log(123);
		// 生成盐
		const salt = await bcrypt.genSalt(10);
		// 使用盐对密码进行加密
		const password = await bcrypt.hash('a123456', salt);
		const user = await User.create({
			nickName: '帽子',
			email: 'maozi@qq.com',
			password: password,
			role: 'superAdmin',
			avatar: null,
			createTime: new Date,
			status: 1
		});
	}
})
// 连接操作
// Category.find()
//       .populate('author')
//       .exec(function(err,docs){
// 		console.log(docs);
// })
// Post.create({
// 	title: '测试文章x',
// 	author: '5e0a0833f8701c4bc4f2dfdd',
// 	abstract: '这是一篇测试文章',
// 	content: '测试内容123456789',
// 	category: '5e0dbd0af9dfed0488457912'
// })
// Post.find()
//       .populate(['author','category'])
//       .exec(function(err,docs){
// 		console.log(docs);
// })
// 路由
require('./routes')(app);
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})