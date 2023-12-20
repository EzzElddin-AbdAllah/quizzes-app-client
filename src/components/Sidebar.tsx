import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const Sidebar = () => {
  // Use media query to check if the screen width is below a certain breakpoint (e.g., 600px)
  const isMobileOrTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
	  justifyContent="flex-start"
	  paddingTop="10px"
      sx={{
        backgroundColor: "#e0f7fa", // Light blue background color
        height: "100%", // Make the sidebar take full height
      }}
    >
      {/* Company Name */}
      <Grid item>
        <Typography variant="h6" gutterBottom>
          coligo
        </Typography>
      </Grid>

      {/* Sidebar Icons with Labels or only Icons for mobile */}
      <Grid item>
        <List>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <DashboardIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Dashboard" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <ScheduleIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Schedule" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <BookIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Courses" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <SchoolIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Gradebook" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <TrendingUpIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Performance" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon  sx={{marginRight: "-20px"}}>
              <AnnouncementIcon />
            </ListItemIcon>
            {!isMobileOrTablet && <ListItemText primary="Announcement" />}
          </ListItemButton>
        </List>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
