# site
最好的React技术栈
+ Typescript（静态检查)
+ React (View)
+ @reach/router (路由)
+ Immer （不可变数据，处理复杂对象的更新）
+ Rematch （状态管理，更好的redux，less code，更好的async处理）
+ SSR （首屏加速和SEO优化）
+ React-intl && moment（国际化和本地化支持）
+ Koa2 （路由和渲染）
+ Webpack （打包工具）
+ prettier (自动代码格式化，统一格式风格)
+ eslint&&tslint&&stylelint&&htmllint (语法检测)
+ husky (precomit hooks,只对提交到的代码进行处理)
+ antd （optional,UI库）
+ Mysql （optional,数据库）
+ GraphQL （optional,更友好的api支持）
+ Redis （optional,缓存）
+ nginx (optional,反向代理)

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
### Todo List
- [x] 服务端渲染
- [x] Code Splitting
- [x] 请求同构
- [x] Icon 自动化管理
- [x] 货币日期时间本地化
- [x] csrf&&xss防御
- [ ] 日志集成
- [ ] 代码规范检查(禁止不符合规范的代码提交，如中间件格式)
- [ ] 前端性能监控 （首屏、图片加载、接口兜底等）
- [ ] Node层性能监控（内存溢出检测和调试等）
- [ ] 脚手架（提供自动添加路由、组件、容器、页面等级别代码生成，和调试工具）
- [ ] SPA下的复杂状态管理
- [ ] mock方案
- [ ] 接口统一管理方案
- [ ] XSS/CSRF等安全防御
- [ ] 监控报警（metrics，sentry）
- [ ] Docker （简化测试环境部署，一键部署开发机）
- [ ] UI库&&中间件库共享（lerna or git）
- [ ] 前端埋点
- [ ] 单元测试、集成测试、UI测试
- [ ] 页面死链检测
- [ ] 编辑器（数据的序列化和反序列化，安全和转义处理，复杂状态管理、插件化）
- [ ] 开发体验优化（自定义lint支持,hmr支持等）
- [ ] ab测方案 （前端ab测、node层ab测、ssr下的ab测）
- [ ] 文案翻译及管理
- [ ] 前后端鉴权处理

### npm scripts说明
+ npm client:dev 前端代码生成包括client:bundle前端代码打包和client:ssr前端ssr代码打包
+ npm server:dev node代码启动，需要等待client:dev启动后启动