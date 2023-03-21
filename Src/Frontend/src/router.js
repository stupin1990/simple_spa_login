import { createWebHistory, createRouter } from "vue-router";

import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import ForgotForm from './components/ForgotForm'

const routes = [
  {
    path: "/",
    name: "Home",
    component: LoginForm,
  },
  {
    path: "/registration",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: ForgotForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
