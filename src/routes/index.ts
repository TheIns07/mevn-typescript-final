import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: "/",
      alias: "/tasks",
      name: "tasks-list",
      component: () => import("./../components/TaskList.vue"),
    },
    {
      path: "/",
      alias: "/tasks/new",
      name: "task-new",
      component: () => import("./../components/TaskForm.vue"),
    },
    {
      path: "/",
      alias: "/tasks/:id",
      name: "task-details",
      component: () => import("./../components/TaskDetail.vue"),
    },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;