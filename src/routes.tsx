import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/dashboard",
		element: <DashboardPage />,
	},
]);

export default router;
