import { FC } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";


const RequireAuth: FC = () => {
    let location = useLocation()
    return (
        false ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth