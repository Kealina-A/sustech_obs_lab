/*
 * @Description: '项目'页面所有路由
 * @Author: HuangXinfeng
 * @Date: 2020-03-25 12:00:00
 * @LastEditTime:
*/
export default [
  {
    path: 'project',
    component: resolve => require(['@/views/project'], resolve),
    name: 'project',
    meta: {
      nav: '项目'
    }
  },
]
