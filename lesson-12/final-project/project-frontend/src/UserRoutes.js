import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./modules/PrivateRoute/PrivateRoute";
import PublicRoute from "./modules/PublicRoute/PublicRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const MyMoviesPage = lazy(() => import("./pages/MyMoviesPage/MyMoviesPage"));
const MyFavoriteMoviesPage = lazy(() => import("./pages/MyFavoriteMoviesPage/MyFavoriteMoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>....Load page</p>}>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/my-movies" element={<MyMoviesPage />} />
                    <Route path="/my-favorite-movies" element={<MyFavoriteMoviesPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;