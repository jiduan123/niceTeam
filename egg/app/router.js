'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/post',controller.post.index);
  router.get('/get', controller.get.index);
  //实时查询数据
  router.get('/searchtime', controller.get.searchtime);
  //首页查询所有店铺信息
  router.post('/index', controller.getinfo.index);
  //根据类型id查询店铺信息
  router.post('/Tshop', controller.getshop.byshtid);
  //根据id查询店铺信息
  router.post('/typeshop', controller.getshop.index);
  //根据店铺id查询团购信息
  router.post('/getgroup', controller.getgroup.index);
  //根据团购id查询团购信息
  router.post('/getgroupbyid', controller.getgroup.groupid);
  //获取店铺种类信息
  router.post('/gettypeimg', controller.gettype.index);


  //加入购物车信息
  router.post('/addcar', controller.addbuy.index);

  

  


};
