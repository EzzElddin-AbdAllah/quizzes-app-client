import AnnouncementIcon from "@mui/icons-material/Announcement";
import BookIcon from "@mui/icons-material/Book";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import SidebarLink from "../../entities/SidebarLink";
import useSidebarStore from "../../sidebarStore";
import SidebarLinkComponent from "./SidebarLinkComponent";

const links: SidebarLink[] = [
	{ icon: <DashboardIcon />, label: "Dashboard" },
	{ icon: <ScheduleIcon />, label: "Schedule" },
	{ icon: <BookIcon />, label: "Courses" },
	{ icon: <SchoolIcon />, label: "Gradebook" },
	{ icon: <TrendingUpIcon />, label: "Performance" },
	{ icon: <AnnouncementIcon />, label: "Announcement" },
];

const Sidebar: React.FC = () => {
	const isMobileOrTablet = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);

	const selectedLink = useSidebarStore((state) => state.selectedLink);
	const setSelectedLink = useSidebarStore((state) => state.setSelectedLink);

	const handleLinkClick = (label: string) => {
		setSelectedLink(label);
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="flex-start"
			paddingTop="10px"
			sx={{ backgroundColor: "#13577c", height: "100%" }}
		>
			<Grid item>
				<Typography
					variant="h6"
					gutterBottom
					sx={{ color: "#fff", padding: "20px 0px 20px 0px" }}
				>
					Coligo
				</Typography>
			</Grid>

			<Grid item>
				{links.map((link) => (
					<SidebarLinkComponent
						key={link.label}
						link={link}
						selected={selectedLink === link.label}
						onClick={() => handleLinkClick(link.label)}
						hideLabelOnMobile={isMobileOrTablet}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default Sidebar;
