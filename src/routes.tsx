import { createBrowserRouter } from "react-router-dom";
import requireAuth from "./components/requireAuth";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";

const AuthenticatedDashboard = requireAuth(DashboardPage);

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/dashboard",
		element: <AuthenticatedDashboard />,
	},
]);

export default router;
