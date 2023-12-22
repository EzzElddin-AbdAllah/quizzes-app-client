import {
	Card,
	CardContent,
	List,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Quiz from "../../entities/Quiz";
import QuizCard from "./QuizCard";

const fetchQuizzes = async () => {
	const response = await fetch("http://localhost:3001/api/quizzes");
	const data = await response.json();
	return data;
};

const QuizList = () => {
	const {
		data: quizzes,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["quizzes"],
		queryFn: fetchQuizzes,
	});

	const theme = useTheme();
	const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading quizzes</div>;
	}

	// Only take the first 2 quizzes
	const firstTwoQuizzes: Quiz[] = quizzes.slice(0, 2);

	return (
		<Card
			style={{
				maxHeight: isMobileOrTablet ? "100%" : "400px",
				overflowY: isMobileOrTablet ? "hidden" : "auto",
			}}
		>
			<CardContent>
				{/* Title */}
				<Typography variant="h5" component="div" gutterBottom>
					What's Duo
				</Typography>

				{/* List of quizzes */}
				<List>
					{firstTwoQuizzes.map((quiz) => (
						<QuizCard
							key={quiz.id}
							quiz={quiz}
							isMobileOrTablet={isMobileOrTablet}
						/>
					))}
				</List>
			</CardContent>
		</Card>
	);
};

export default QuizList;
