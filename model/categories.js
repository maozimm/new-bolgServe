// 数据库操作
const mongoose = require('mongoose');
// 模型规则类
const { Schema } = mongoose;
// 对象规则验证
const Joi = require('joi');
// 文章模型规则
const CategorySchema = new Schema({
	// 分类名称
	title: {
		type: String,
		minlength: 2,
		maxlength: 30,
		required: true,
		unique: true
    },
    // 创建人
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	// 创建时间
	createAt: {
		type: Date,
		default: Date.now
	}
}, {versionKey: false});

// 创建分类集合
const Category = mongoose.model('Category', CategorySchema);

// 导出模块成员
module.exports = {
	Category
}