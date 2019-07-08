import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/css'
    },
    {
      path: '/css',
      name: 'css',
      component: () =>
        import(/* webpackChunkName: "pure-css" */ './views/pure-css.vue')
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: () =>
        import(
          /* webpackChunkName: "vuetify-v-flex" */ './views/vuetify-v-flex.vue'
        )
    }
  ]
});
