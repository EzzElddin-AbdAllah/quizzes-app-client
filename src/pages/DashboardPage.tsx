import React from "react";
import Grid from "@mui/material/Grid";
import AnnouncementList from "../components/AnnouncementList";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";

const DashboardPage = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: "#f0f0f0", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Grid item xs={2} sx={{ overflow: "hidden", marginTop: -1, marginLeft: -1 }}>
        <Sidebar />
      </Grid>

      <Grid container item direction="column" xs={10} spacing={2}>
        {/* Navbar */}
        <Grid item sx={{marginTop: -1}}>
          <Navbar />
        </Grid>

        <Grid container item>
          {/* Welcome Section */}
          <Grid item xs>
            {/* Your content for the welcome section goes here */}
            <WelcomeCard />
          </Grid>
        </Grid>

        {/* Announcements and Quizzes Sections */}
        <Grid container item spacing={2}>
          {/* Announcements Section */}
          <Grid item xs={8} >
            {/* Your content for the announcements section goes here */}
            <AnnouncementList />
          </Grid>

          {/* Quizzes Section */}
          <Grid item xs={4} sx={{ width: "100%"  }}>
            {/* Your content for the quizzes section goes here */}
            <QuizList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
