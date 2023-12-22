import LabelIcon from "@mui/icons-material/Label";
import {
	Button,
	Divider,
	Grid,
	ListItem,
	ListItemIcon,
	Typography,
} from "@mui/material";
import Quiz from "../../entities/Quiz";

interface QuizCardProps {
	quiz: Quiz;
	isMobileOrTablet: boolean;
}

const QuizCard = ({ quiz, isMobileOrTablet }: QuizCardProps) => {
	return (
		<Grid container key={quiz.id} spacing={2}>
			<Grid item xs={12}>
				<ListItem>
					<ListItemIcon>
						<LabelIcon color="primary" />
					</ListItemIcon>
					<Typography
						variant={isMobileOrTablet ? "h6" : "body1"}
						color="textPrimary"
					>
						Quiz Name: {quiz.name}
					</Typography>
				</ListItem>
			</Grid>
			<Grid item xs={12}>
				<ListItem>
					<Typography variant="body2" color="textSecondary">
						Course: {quiz.course}
					</Typography>
				</ListItem>
			</Grid>
			<Grid item xs={12}>
				<ListItem>
					<Typography variant="body2" color="textSecondary">
						Topic: {quiz.topic}
					</Typography>
				</ListItem>
			</Grid>
			<Grid item xs={12}>
				<ListItem>
					<Typography variant="body2" color="textSecondary">
						Due to: {quiz.dueDate}
					</Typography>
				</ListItem>
			</Grid>
			<Grid item xs={12}>
				<Divider />
			</Grid>
			<Grid item xs={12}>
				<Button
					variant="outlined"
					color="primary"
					style={{ width: "100%", marginTop: "8px" }}
				>
					Start Quiz
				</Button>
			</Grid>
		</Grid>
	);
};

export default QuizCard;
