import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Sobre mim",
    component: () => import("@/views/SobremimView.vue"),
    children: [
      {
        path: "",
        name: "Sobre mim",
        component: () => import("@/views/DescricaoView.vue"),
      },
      {
        path: "/minha-historia",
        name: "Minha História",
        component: () => import("@/views/HistoriaView.vue"),
      },
    ],
  },
  {
    path: "/experiencias",
    name: "Experiências",
    component: () => import("@/views/ExperienciasView.vue"),
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: () => import("@/views/ProjetosView.vue"),
  },
  {
    path: "/graduacoes",
    name: "Graduações",
    component: () => import("@/views/GraduacoesView.vue"),
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("@/views/CursosView.vue"),
  },
  {
    path: "/hard-skills",
    name: "Hard Skills",
    component: () => import("@/views/HardskillsView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
