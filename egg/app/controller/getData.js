'use strict';

const Controller = require('egg').Controller;

class GetDataController extends Controller {
    async index() {
        const { ctx,service } = this;
        let formData = ctx.request.query;
        let result =await service.getData.query(formData.keyword);
        ctx.body=result;

    }
}

module.exports = GetDataController;
