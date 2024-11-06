
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Depoimentos from './pages/Depoimentos';
import Contato from './pages/Contato';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/produtos', component: Produtos },
  { path: '/sobre', component: Sobre },
  { path: '/depoimentos', component: Depoimentos },
  { path: '/contato', component: Contato },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

