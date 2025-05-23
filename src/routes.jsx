import { AuthPages } from "./pages/Auth/AuthPages";
import DashboardAdmin from "./pages/Dashboard/DashboardAdmin";
import { NotFoundPages } from "./pages/NotFound/NotFoundPages";
import DashboardAdminHotel from "./pages/Dashboard/DashboardAdminHotel";
import { DashboardClient } from "./pages/Dashboard/DashboardClient";
import ProtectedRoute from "./shared/hooks/ProtectedRoute";

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