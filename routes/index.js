// 路由集合
module.exports = app => {
	// // 用户
	// app.use('/users', require('./user'));
	// // 分类
	// app.use('/categories', require('./category'));
	// // 文章
	// app.use('/posts', require('./post'));
	// // 评论
	// app.use('/comments', require('./comment'));
	// // 轮播图
	// app.use('/slides', require('./slide'));
	// // 网站设置
	// app.use('/settings', require('./settings'));

	// 其他
	// 用户登录
	app.get('/login', require('./login/login'));
	// 用户注册
	app.post('/register', require('./login/register'));
	// 获取用户信息
	app.get('/user', require('./user/getUser'));
	// 修改用户信息
	app.put('/user/:id', require('./user/modifyUser'));
	// 删除用户
	app.delete('/user/:id', require('./user/deleteUser'));
	// 添加用户
	app.post('/user', require('./user/addUser'));
	// 获取分类
	app.get('/category', require('./category/getCategory'));
	// 获取文章
	app.get('/article', require('./article/getArticle'));
	// 上传文章封面
	app.post('/articleImg', require('./article/articleImg'));
	// 邮箱验证码
	app.post ('/emailVerify', require('./email/verify'));
	// 发布文章
	app.post('/addArticle', require('./article/addArticle'));
	// // 用户退出
	app.get('/getHotArticle', require('./article/getHotArticle'));
	// 修改文章
	app.put('/modifyArticle/:id', require('./article/modifyArticle'));
	// 获取单篇文章详情
	app.get('/findArticle/:id', require('./article/findArticle'));
	// 删除文章
	app.delete('/deleteArticle/:id', require('./article/deleteArticle'));
	// 修改热门文章
	app.put('/modifyIsHot/:id', require('./article/modifyIsHot'));
	// 浏览记录
	app.post('/addViews', require('./comments/addViews'));
	// 获取评论
	app.get('/getComment', require('./comments/getComment'));
	// 获取评论回复
	app.get('/getReply', require('./reply/getReply'));
	// 添加评论回复
	app.post('/addReply', require('./reply/addReply'));
	// 添加评论
	app.post('/addComment', require('./comments/addComment'));
	// 获取推荐文章
	app.get('/getRecommendArticle', require('./article/getRecommendArticle'));
	// 获取用户信息
	app.get('/getUser/:id', require('./user/findUser'));
	// 获取分类文章
	app.get('/getCategoryArticle', require('./article/getCategoryArticle'));
	// 获取用户文章
	app.get('/getUserArticle', require('./article/getUserArticle'));
	// app.post('/logout', require('./actions/other/logout'));
	// // 判断用户是否登录
	// app.get('/login/status', require('./actions/other/loginStatus'))
	// // 图片文件上传
	// app.post('/upload', require('./actions/other/upload'));
};