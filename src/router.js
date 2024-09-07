import { createRouter, createWebHistory } from "vue-router";

import PanelAdministracion from "/src/components/PanelAdministracion.vue";
import Home from "/src/components/Home.vue";

const routes = [
  {
    path: "/admin", 
    name: "PanelAdministracion",
    component: PanelAdministracion,
  },
  {
    path: "/", // Ruta URL para la página principal
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
