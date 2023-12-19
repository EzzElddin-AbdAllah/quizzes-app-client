import React from "react";
import {
	Card,
	CardContent,
	Typography,
	List,
	ListItem,
	Button,
	Divider,
} from "@mui/material";

const QuizList = () => {
	return (
		<Card
			sx={{
				width: "50%",
				justifyContent: "flex-end",
				alignItems: "flex-end",
			}}
		>
			<CardContent>
				{/* Title */}
				<Typography variant="h5" component="div" gutterBottom>
					What's Duo
				</Typography>

				{/* List of quizzes */}
				<List>
					{/* Quiz 1 */}
					<ListItem>
						<Typography variant="body1" color="textPrimary" gutterBottom>
							Quiz Name: Quiz 1
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Course: Math
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Topic: Algebra
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Due to: September 25, 2023
						</Typography>
						<Divider />
						<Button variant="contained" color="primary">
							Start Quiz
						</Button>
					</ListItem>

					{/* Quiz 2 */}
					<ListItem>
						<Typography variant="body1" color="textPrimary" gutterBottom>
							Quiz Name: Quiz 2
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Course: Science
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Topic: Biology
						</Typography>
						<Typography variant="body2" color="textSecondary" gutterBottom>
							Due to: September 28, 2023
						</Typography>
						<Divider />
						<Button variant="contained" color="primary">
							Start Quiz
						</Button>
					</ListItem>

					{/* Add more quizzes as needed */}
				</List>
			</CardContent>
		</Card>
	);
};

export default QuizList;
