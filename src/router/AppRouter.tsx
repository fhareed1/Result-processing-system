import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routes"
import Login from "@/pages/auth/login"

const AppRouter = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path={ROUTES.login} element={<Login />} />
    </Routes>
  )
}

export default AppRouter