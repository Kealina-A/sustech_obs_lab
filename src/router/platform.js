/*
 * @Description: '共享平台'页面所有路由
 * @Author: HuangXinfeng
 * @Date: 2020-03-30 12:00:00
 * @LastEditTime:
*/
export default [
  {
    path: 'platform',
    component: resolve => require(['@/views/platform'], resolve),
    name: 'platform',
    meta: {
      nav: '共享平台'
    }
  },
]
