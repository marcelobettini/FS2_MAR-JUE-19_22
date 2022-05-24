import { Outlet, Navigate } from "react-router-dom"
const useAuth = () => {
    const user = { loggedIn: false }
    return user.loggedIn
}

const ProtectedRoute = () => {

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />

}
export default ProtectedRoute