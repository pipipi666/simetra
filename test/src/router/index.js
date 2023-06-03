import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ObjectsView from "../views/ObjectsView.vue";
import StatisticsView from "../views/StatisticsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/objects",
    name: "objects",
    component: ObjectsView,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: StatisticsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

