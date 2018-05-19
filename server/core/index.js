const Koa = require("koa");
const Loader = require("./loader");
const Service = require('./base/service');
const Controller = require('./base/controller');

class Core extends Koa {
  constructor() {
    super();
    this.loader = new Loader(this);
    this.init();
  }
  init() {
    // 初始化负责挂载service extend
    this.loader.load();
  }
}
module.exports = {
  Core,
  Service,
  Controller
};
