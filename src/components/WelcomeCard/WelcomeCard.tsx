import { Button, Card, CardContent, Typography } from "@mui/material";

const WelcomeCard = () => {
	return (
		<Card sx={{ width: "100%" }}>
			<CardContent>
				<Typography
					variant="h5"
					component="div"
					gutterBottom
					sx={{ color: "#1e4869", fontWeight: "bold" }}
				>
					EXAMS TIME
				</Typography>

				<Typography variant="body2" color="textSecondary" paragraph>
					This is a small paragraph about exams and any related information you
					want to provide.
				</Typography>

				<Typography variant="body1" paragraph>
					"Success is not final, failure is not fatal: It is the courage to
					continue that counts."
				</Typography>

				<Button
					variant="contained"
					color="primary"
					sx={{
						color: "white",
						backgroundColor: "#49cdc5",
						"&:hover": {
							backgroundColor: "#3aada6",
						},
					}}
				>
					View Exams Tips
				</Button>
			</CardContent>
		</Card>
	);
};

export default WelcomeCard;
