import Vue from 'vue'
import Router from 'vue-router'
import publishArticle2 from '@/components/publishArticle2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'publishArticle2',
      component:publishArticle2
    }
  ]
})
