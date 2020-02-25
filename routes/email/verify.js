const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const transport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.qq.com', // 服务
    port: 465, // smtp端口
    // secure: true,
    secureConnection: true, // 使用 SSL
    auth: {
      user: '1225423638@qq.com', // 发件地址
      pass: 'ysytpbjqpqlpbabe' // 发件密码
    }
  }));
  
  const randomFns=()=> {
    return (1000 + Math.round(Math.random() * 10000 - 1000)) // 生成4位随机数
  }
  const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/ //验证邮箱正则
  
  module.exports= (req, res) => {
      let EMAIL=req.fields.emailVal
      console.log(EMAIL);
      if (regEmail.test(EMAIL)){
        let code=[randomFns()]
        transport.sendMail({
          from: '1225423638@qq.com', // 发件邮箱
          to: EMAIL, // 收件列表
          subject: '欢迎注册博客系统', // 标题
          // text:"hello",
          html: '<p>你好！</p><p>感谢你注册博客系统。</p><p>你的验证码是：<strong style="color: #ff4e2a;">'+code+'</strong></p><p>***该验证码5分钟内有效***</p>' // html 内容
        }, function(error, data) {
          if (error) {
            console.error(error);
          } else {
            console.log('邮件发送成功，邮箱帐号：'+data.envelope.to);
          }
          transport.close(); // 如果没用，关闭连接池
        })
        console.log('发送的验证码：'+code)
        res.send(code)
        return
      }else {
        res.send('请检查邮箱！')
      }
    }
  