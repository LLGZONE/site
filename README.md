# site
最好的React技术栈
+ Typescript（静态检查)
+ React (View)
+ @reach/router (路由)
+ Immer （不可变数据，处理复杂对象的更新）
+ Rematch （状态管理，更好的redux，less code，更好的async处理）
+ SSR （首屏加速和SEO优化）
+ I18n && L10n （国际化和本地化支持）
+ GraphQL （更友好的api支持）
+ Koa2 （路由和渲染）
+ Webpack （打包工具）
+ Mysql （数据库）
+ Redis （缓存）
+ prettier (自动代码格式化，统一格式风格)
+ eslint&&tslint&&stylelint&&htmllint (语法检测)
+ husky (precomit hooks,只对提交到的代码进行处理)
+ antd （UI库）
+ nginx (反向代理)

### Dev for mac
```shell
安装 mysql nginx redis
$ brew install mysql nginx redis
配置 nginx
$ ln -s $(pwd)/nginx/site.local.conf /usr/local/etc/nginx/servers/site.conf
启动 nginx(80端口需要sudo权限)
$ sudo brew services start nginx
启动 mysql
$ brew services start mysql
链接数据库并创建database
$ mysql -uxxx ;create database site
启动mysql和redis
$ brew services start redis mysql
$ cnpm install 
$ npm run dev:client
$ npm run dev:server
```
### Done
+ Code splitting
+ Icon 管理

### Todo 
+ 服务端渲染
+ 请求同构
+ mock方案
+ 接口统一管理方案
+ 货币日期时间本地化
+ XSS/CSRF等安全防御
+ 监控报警（metrics，sentry）
+ Docker
+ UI库&&中间件库共享（lerna or git）
+ 前端埋点
+ 脚手架（提供自动添加路由、组件、容器、页面等级别支持）
+ 单元测试、集成测试、UI测试
+ 页面死链检测
+ SPA的性能优化
+ SPA下的复杂状态管理
+ 前端性能监控 （首屏、图片加载、接口兜底等）
+ Node层性能监控（内存溢出检测和调试等）
+ 编辑器（数据的序列化和反序列化，安全和转义处理，复杂状态管理、插件化）
+ 开发体验优化（工具支持）
+ ab测方案 （前端ab测、node层ab测、ssr下的ab测）
+ 文案翻译及管理
+ 前后端鉴权处理