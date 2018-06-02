const CACHE = Symbol('cache');
class Loader {
  constructor(app){
    this.app = app;
  }
  load(){
    this.loadService()
  }
  loadToContext(targets, app, property) {
    // 挂载到context下
    Object.defineProperty(app.context,  property, {
      get(){
        if(!this[CACHE]){
          this[CACHE] = {}
        }
        if(!this[CACHE][property]){
          this[CACHE][property] = {}
        }
        for(const [name, target] of Object.entries(targets)){
          this[CACHE][property][name] = new target(this, app);
        }
        return this[CACHE][property]
      }
    })
  }
  loadService(){
    const services = require('../../service');
    this.loadToContext(services,this.app, 'service')
  }
}

module.exports = Loader;