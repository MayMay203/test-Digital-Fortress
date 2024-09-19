import config from "~/config"
import { DefaultLayout } from "~/layouts"
import Home from "~/pages/Home"
import Login from "~/pages/Login"

// Public Routes
const publicRoutes = [
  { path: config.routes.dashboard, component: Home, layout: DefaultLayout },
  { path: config.routes.login, component: Login},
]

// Private Routes
const privateRoutes = []

export { publicRoutes, privateRoutes }
