import {createWebHistory, createRouter} from 'vue-router';
import Home from './../components/Home.vue';
import About from './../components/About.vue';
import Registration from './../components/Registration.vue';
import NotFound from './../components/NotFound.vue';
import Grid from './../components/Grid.vue';
import CodeConverter from './../components/CodeConverter.vue';
import CompositiveApi from './../components/CompositiveApi.vue';
import FetchUser from './../components/FetchUser.vue';
import DemoPage from './../components/DemoPage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/report",
    name: "Grid",
    component: Grid,
  },
  {
    path: "/converter",
    name: "CodeConverter",
    component: CodeConverter,
  },
  {
    path: "/compositive",
    name: "CompositiveApi",
    component: CompositiveApi,
  },
  {
    path: "/fetchUser",
    name: "FetchUser",
    component: FetchUser,
  },
  {
    path: "/demoPage",
    name: "DemoPage",
    component: DemoPage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;