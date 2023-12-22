import { Navigate } from "react-router-dom";
import useAuthStore from "../authStore";

const requireAuth = (Component) => {
	return function AuthenticatedComponent(props) {
		const { isLoggedIn } = useAuthStore();

		if (!isLoggedIn) {
			return <Navigate to="/" replace />;
		}

		return <Component {...props} />;
	};
};

export default requireAuth;
