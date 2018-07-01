# site
最好的React技术栈
+ Typescript
+ React
+ @reach/router
+ Immer
+ Rematch
+ SSR
+ I18n
+ GraphQL
+ Koa2
+ Webpack
+ Mysql
+ Redis

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

### Todo 
1. 服务端渲染
2. 组件库
3. 编辑器支持
4. i18n