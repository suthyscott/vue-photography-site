import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Motorcycles from "../components/Motorcycles.vue";
import People from "../components/People.vue";
import Places from "../components/Places.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/motorcycles",
    name: "Motorcycles",
    component: Motorcycles
  },
  {
    path: "/people",
    name: "People",
    component: People
  },
  {
    path: "/motorcycles",
    name: "Places",
    component: Places
  }
];

const router = new VueRouter({
  routes
});

export default router;
