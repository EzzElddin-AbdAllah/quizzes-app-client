import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	IconButton,
	Badge,
	Avatar,
	styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const SearchContainer = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: "#ffffff", // You can set your desired search bar background color
	marginLeft: 0,
	width: "auto", // Adjust the width as needed
}));

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				{/* Left side */}
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Welcome Ezz,
				</Typography>

				{/* Search bar */}
				<SearchContainer>
					<IconButton sx={{ padding: "10px" }}>
						<SearchIcon />
					</IconButton>
					<InputBase placeholder="Search..." sx={{ padding: "10px" }} />
				</SearchContainer>

				{/* Notifications icon */}
				<IconButton color="inherit">
					<Badge badgeContent={3} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>

				{/* Messages icon */}
				<IconButton color="inherit">
					<Badge badgeContent={2} color="error">
						<MailOutlineIcon />
					</Badge>
				</IconButton>

				{/* Avatar */}
				<Avatar alt="Avatar" src="/path/to/avatar.jpg" />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
