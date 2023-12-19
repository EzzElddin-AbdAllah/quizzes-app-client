import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const WelcomeCard = () => {
	return (
		<Card sx={{ width: "100%" }}>
			<CardContent>
				{/* Title */}
				<Typography variant="h5" component="div" gutterBottom>
					EXAMS TIME
				</Typography>

				{/* Small paragraph */}
				<Typography variant="body2" color="textSecondary" paragraph>
					This is a small paragraph about exams and any related information you
					want to provide.
				</Typography>

				{/* Quote */}
				<Typography variant="body1" paragraph>
					"Success is not final, failure is not fatal: It is the courage to
					continue that counts."
				</Typography>

				{/* View exams tips button */}
				<Button variant="contained" color="primary">
					View Exams Tips
				</Button>
			</CardContent>
		</Card>
	);
};

export default WelcomeCard;
