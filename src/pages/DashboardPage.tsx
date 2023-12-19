import Grid from "@mui/material/Grid";
import AnnouncementList from "../components/AnnouncementList";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";

const DashboardPage = () => {
	return (
		<Grid container>
			{/* Sidebar */}
			<Grid item xs={2}>
				<Sidebar />
			</Grid>

			{/* Main content container */}
			<Grid item xs={10} container direction="column">
				{/* Navbar */}
				<Grid item>
					<Navbar />
				</Grid>

				{/* Welcome Section */}
				<Grid item container>
					{/* Your content for the welcome section goes here */}
					<WelcomeCard />
				</Grid>

				{/* Announcements and Quizzes Sections */}
				<Grid item container>
					{/* Announcements Section */}
					<Grid item xs={6}>
						{/* Your content for the announcements section goes here */}
						<AnnouncementList />
					</Grid>

					{/* Quizzes Section */}
					<Grid item xs={6}>
						{/* Your content for the quizzes section goes here */}
						<QuizList />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default DashboardPage;
