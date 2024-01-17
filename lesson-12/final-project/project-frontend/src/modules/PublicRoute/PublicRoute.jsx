import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {isUserLogin} from "../../redux/auth/auth-selectors";

const PublicRoute = ()=> {
    const isLogin = useSelector(isUserLogin);

    if(isLogin) {
        return <Navigate to="/my-movies" />
    }

    return <Outlet />
}

export default PublicRoute;