// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;

// 文章模型规则
const PostSchema = new Schema({
	// 标题
	title: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: [true, '请输入文章标题']
	},
	abstract: {
		type: String,
		minlength: 2,
		maxlength: 50,
		required: [true, '请输入文章摘要']
	},
	// 作者
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	// 状态
	state: {
		type: Number,
		// 0 草稿 1 发布
		default: 0
	},
	isHot: {
		type: Number,
		// 0非热门 1 热门
		default: 0
	},
	// 创建时间
	createAt: {
		type: Date,
		default: Date.now
	},
	// 修改时间
	updateAt: {
		type: Date,
		default: Date.now
	},
	// 内容
	content: {
		type: String,
		default: null,
		minlength: 5,
		maxlength: 2000
	},
	// 缩略图
	thumbnail: {
		type: String,
		default: null
	},
	// 所属分类
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: [true, '分类信息不存在']
	},
	meta: {
		// 看过数量
		views: { type: Number, default: 0 },
		// 喜欢数量
		likes: { type: Number, default: 0 },
		// 评论数量
		comments: { type: Number, default: 0 }
	}
}, {versionKey: false});

const Post = mongoose.model('Post', PostSchema);

// 时间更新
PostSchema.pre('findOneAndUpdate', function(next) {
	this.findOneAndUpdate({}, { updateAt: Date.now() })
	next();
});


// 导出模块成员
module.exports = {
	Post
};