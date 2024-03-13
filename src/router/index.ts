import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      isBreadcrumb: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'ele-Home',
          cache: true,
          hidden: false
        }
      },
      {
        path: '/system',
        name: 'System',
        redirect: '/system/menu',
        meta: {
          title: '系统管理',
          icon: 'ele-Setting'
        },
        children: [
          {
            path: '/system/menu',
            name: 'SystemMenu',
            component: () => import('@/views/system/menu/index.vue'),
            meta: {
              title: '菜单管理',
              icon: 'ele-Menu',
              cache: true,
              hidden: false
            }
          },
          {
            path: '/system/role',
            name: 'SystemRole',
            component: () => import('@/views/system/role/index.vue'),
            meta: {
              title: '角色管理',
              icon: 'ele-IceCream',
              cache: true,
              hidden: false
            }
          },
          {
            path: '/system/user',
            name: 'SystemUser',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
              title: '用户管理',
              icon: 'ele-User',
              cache: true,
              hidden: false
            }
          }
        ]
      },
      {
        path: '/goods',
        name: 'Goods',
        redirect: '/goods/list',
        meta: {
          title: '商品管理',
          icon: 'ele-Goods',
          cache: true,
          hidden: false
        },
        children: [
          {
            path: '/goods/list',
            name: 'GoodsList',
            component: () => import('@/views/goods/list.vue'),
            meta: {
              title: '商品列表',
              icon: 'ele-GoodsFilled',
              cache: true,
              hidden: false
            }
          },
          {
            path: '/goods/category',
            name: 'GoodsCategory',
            component: () => import('@/views/goods/category.vue'),
            meta: {
              title: '商品分类',
              icon: 'ele-Operation',
              cache: true,
              hidden: false
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: dynamicRoutes
})

export default router
