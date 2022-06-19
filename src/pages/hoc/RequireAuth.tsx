import { FC } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hook";


const RequireAuth: FC = () => {
    let location = useLocation()
    let checker = useAppSelector(state => state.login.check)
    return (
        checker ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth