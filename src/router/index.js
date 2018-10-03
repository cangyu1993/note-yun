import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

const components={
  Layout:()=>import('@/views/Layout'),
  login:()=>import('@/views/login'),
  register:()=>import('@/views/register'),
  takeNotes:()=>import('@/views/takeNotes'),
  article:()=>import('@/views/article'),
};

export default new Router({
  routes: [
    {
      path:'/',
      name:'Layout',
      component:components.Layout,
      redirect:'/login',
      children:[
        {
          path:'login',
          name:'login',
          component:components.login,
        },
        {
          path:'register',
          name:'register',
          component:components.register,
        },
        {
          path:'takeNotes',
          name:'takeNotes',
          component:components.takeNotes,
        },,
        {
          path:'article/:id',
          name:'article',
          component:components.article,
        },
      ]
    }
  ]
})
