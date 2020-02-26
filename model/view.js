// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;
// 文章模型规则
const ViewsSchema = new Schema({
	// 浏览者
	visitor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, '浏览者id不存在']
	},
	// 浏览文章
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post',
		required: [true, '浏览文章id不存在']
	},
	// 浏览时间
	createAt: {
		type: Date,
		default: Date.now
	}
}, {versionKey: false});
// 创建评论集合
const View = mongoose.model('Views', ViewsSchema);

// 导出模块成员
module.exports = {
    View
}