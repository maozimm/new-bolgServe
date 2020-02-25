const mongoose=require('mongoose')
mongoose.set('useCreateIndex', true)
// 解决使用findAndModify驱动
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/my_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(x=>console.log('连接成功'));