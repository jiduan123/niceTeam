'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.login.index);
  router.get('/getData', controller.getData.index);
  router.get('/getMovie', controller.getMovie.index);
  router.get('/getWantMovie', controller.getWantMovie.index);
  router.get('/getStars', controller.getStars.index);
  router.get('/getComment', controller.getComment.index);
  router.post('/addWant', controller.addWant.index);
  router.post('/addComment', controller.addComment.index);
  router.post('/addNum', controller.addNum.index);
  router.post('/delWant', controller.delWant.index);
};
