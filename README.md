# 比赛帮一站式赛事系统
比赛帮可以为各种中大型赛事提供可定制化的系统产品，赛事页面可以随心所欲设计，强大的后台管理系统，并提供一站式服务器维护和域名部署维护服务。
适用：

1、中大型赛事，需要独立域名的专属赛事网站。
2、中大型论坛或网站举办比赛，需要单独的赛事专题页，能和自己的用户系统结合。
## Development

先`npm install`再`./mvnw` 和 `gulp`

本项目只是minisite的angular版模板，只介绍app内文件目录，
css文件路径尽量与js文件路径保持一致

```
app
├── home -----------------首页
├── services --------------前端api接口
├── rule-or-intro --------------规则或者介绍
├── .gitignore ----------------git配置
├── public --------------------公共资源
│   └── index.html ------------首页html
└── src -----------------------源码目录
    ├── App.css ---------------css文件
    ├── App.js ----------------React组件
    ├── index.js --------------入口js文件
    └── logo.svg --------------svg图片
```