import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useAuthStore from "../authStore";

const HomePage = () => {
	const { login } = useAuthStore();

	return (
		<Grid
			container
			spacing={3}
			direction="column"
			alignItems="center"
			justifyContent="center"
			style={{ minHeight: "100vh" }}
		>
			<Grid item>
				<Button variant="contained" color="primary" onClick={login}>
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to="/dashboard"
					>
						Log In
					</Link>
				</Button>
			</Grid>
		</Grid>
	);
};

export default HomePage;
