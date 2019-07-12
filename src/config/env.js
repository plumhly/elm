/**
 * 配置环境
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

 let baseUrl = '';
 let routerMode = 'hash';
 let imgBaseUrl = '';

 if (process.env.NODE_ENV == 'development') {
     imgBaseUrl = '/img/';
 } else if (process.env.NODE_ENV == 'production') {
     imgBaseUrl = '//elm.cangdu.org/img/'
 }

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
 }