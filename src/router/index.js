import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("../layouts/NavBar.vue"),
    children: [
      { path: "", component: () => import("../views/Home.vue") },
      { path: "/about", component: () => import("../views/About.vue") },
      { path: "/careers", component: () => import("../views/Careers.vue") },
      { path: "/projects", component: () => import("../views/Projects.vue") },
      { path: "/contactus", component: () => import("../views/Contact.vue") },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
