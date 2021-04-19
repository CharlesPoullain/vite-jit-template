import { createWebHistory, createRouter } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "layouts-generated";
import NProgress from "nprogress";

const routes = setupLayouts(generatedRoutes);

const history = createWebHistory();
const router = createRouter({ history, routes });

router.beforeEach((to, from) => {
  NProgress.start();
});
router.afterEach((to, from) => {
  NProgress.done();
});
export default router;
