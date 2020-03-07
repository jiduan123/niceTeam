'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async index(username) {
    const { app } = this;
    let result=await app.mysql.get('user',{username})
    return result;
  }

}

module.exports = LoginService;