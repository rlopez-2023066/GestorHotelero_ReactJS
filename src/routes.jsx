import HotelsTable from "./Components/Tables/HotelsTable";
import { AuthPages } from "./Pages/Auth/AuthPages";
import DashboardAdmin from "./Pages/Dashboard/DashboardAdmin";
import { NotFoundPages } from "./Pages/NotFound/NotFoundPages";
import DashboardAdminHotel from "./Pages/Dashboard/DashboardAdminHotel";
import { DashboardClient } from "./Pages/Dashboard/DashboardClient";
import ProtectedRoute from "./Shared/hooks/ProtectedRoute";

export const routes = [
    {
        path: '/', 
        element: <AuthPages />,
    },
    {
        path: '/auth', 
        element: <AuthPages />
    },
    {
        path: '/dashboardAdmin',
        element: (
        <ProtectedRoute>
            <DashboardAdmin />
        </ProtectedRoute>
        )
    },
    {
        path: '/dashboardHotelAdmin',
        element: (
        <ProtectedRoute>
            <DashboardAdminHotel />
        </ProtectedRoute>
        )
    },
    {
        path: '/dashboardClient',
        element: (
        <ProtectedRoute>
            <DashboardClient />
        </ProtectedRoute>
        )
    },
    {
        path: '*',
        element: <NotFoundPages />
    },
    

]