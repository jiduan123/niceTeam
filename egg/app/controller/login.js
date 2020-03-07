'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx,service} = this;
     //接收客户端提交上来的数据
     let formData = ctx.request.body;
    
     let result = await service.login.index(formData.username);
     let data = { code: 1, Msg: '登录成功' };
     //账号不存在

     if (!result) {
       data = { code: -1, Msg: '账号不存在' };
     }
     //密码错误 
     if (result && formData.passwd != result.passwd) {
       console.log("mima")
       data = { code: 0, Msg: '密码错误' };
     }
     ctx.body=data;
  }
}

module.exports = LoginController;
