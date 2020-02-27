// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;
// 文章模型规则
const ReplySchema = new Schema({
	// 评论人
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: [true, '评论人id不存在']
	},
	// 评论内容
	content: {
		type: String,
		minlength: 2,
		required: true
	},
	// 评论id
	comment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment',
		required: [true, '评论id不存在']
	},
	// 状态
	state: {
		type: Number,
		// 0 未批准 1 批准
		default: 0
	},
	// 评论时间
	createAt: {
		type: Date,
		default: Date.now
	}
}, {versionKey: false});
// 创建评论集合
const Reply = mongoose.model('Reply', ReplySchema);

// 导出模块成员
module.exports = {
	Reply
}
