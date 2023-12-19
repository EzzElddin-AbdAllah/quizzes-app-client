import {
	Grid,
	Typography,
	List,
	ListItemIcon,
	ListItemText,
	ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BookIcon from "@mui/icons-material/Book";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const Sidebar = () => {
	return (
		<Grid container direction="column" alignItems="center">
			{/* Company Name */}
			<Grid item>
				<Typography variant="h6" align="center" gutterBottom>
					coligo
				</Typography>
			</Grid>

			{/* Sidebar Icons with Labels */}
			<Grid item>
				<List>
					<ListItemButton>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<ScheduleIcon />
						</ListItemIcon>
						<ListItemText primary="Schedule" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<BookIcon />
						</ListItemIcon>
						<ListItemText primary="Courses" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<SchoolIcon />
						</ListItemIcon>
						<ListItemText primary="Gradebook" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<TrendingUpIcon />
						</ListItemIcon>
						<ListItemText primary="Performance" />
					</ListItemButton>
					<ListItemButton>
						<ListItemIcon>
							<AnnouncementIcon />
						</ListItemIcon>
						<ListItemText primary="Announcement" />
					</ListItemButton>
				</List>
			</Grid>
		</Grid>
	);
};

export default Sidebar;
