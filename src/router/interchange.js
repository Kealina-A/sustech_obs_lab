/*
 * @Description: '交流'页面所有路由
 * @Author: HuangXinfeng
 * @Date: 2020-03-25 12:00:00
 * @LastEditTime:
*/
export default [
  {
    path: 'interchange',
    component: resolve => require(['@/views/interchange'], resolve),
    name: 'interchange',
    meta: {
      nav: '交流'
    }
  },
]
