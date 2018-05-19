class Loader {
  constructor(app){
    this.app = app;
  }
  loadService() {
    const services = require("./service");
    console.log('services:', services);
    const app = this.app;
    Object.defineProperty(app.context, "service", {
      get() {
        if (!this.cache) {
          this.cache = {};
        }
        if (!this.cache.service) {
          this.cache.service = {};
        }
        for (const [name, service] of Object.entries(services)) {
          this.cache.service[name] = new service(this, app);
        }
        return this.cache.service;
      }
    });
  }
}
module.exports = Loader;