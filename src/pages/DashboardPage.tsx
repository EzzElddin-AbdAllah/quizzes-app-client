import Grid from "@mui/material/Grid";
import Announcements from "../components/Announcements/Announcements";
import Navbar from "../components/Navbar/Navbar";
import QuizList from "../components/Quizzes/QuizList";
import Sidebar from "../components/Sidebar/Sidebar";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";

const DashboardPage = () => {
	return (
		<Grid
			container
			spacing={2}
			sx={{ backgroundColor: "#f0f0f0", height: "100vh" }}
		>
			<Grid
				item
				xs={2}
				sx={{ overflow: "hidden", marginTop: -1, marginLeft: -1 }}
			>
				<Sidebar />
			</Grid>

			<Grid container item direction="column" xs={10} spacing={2}>
				<Grid item sx={{ marginTop: -1 }}>
					<Navbar />
				</Grid>

				<Grid container item>
					<Grid item xs>
						<WelcomeCard />
					</Grid>
				</Grid>

				<Grid container item spacing={2}>
					{/* Announcements Section */}
					<Grid item xs={12} md={8}>
						<Announcements />
					</Grid>

					<Grid item xs={12} md={4}>
						<QuizList />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default DashboardPage;
