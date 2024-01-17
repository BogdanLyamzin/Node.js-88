import {Navigate } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Navigate to="/login" replace={true} />
    )
}

export default NotFoundPage;