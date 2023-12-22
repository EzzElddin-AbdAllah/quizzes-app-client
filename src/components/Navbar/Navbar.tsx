import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
	AppBar,
	Avatar,
	Badge,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useAuthStore from "../../authStore";
import AuthUser from "../../entities/AuthUser";
import SearchContainer from "./SearchContainer";

const Navbar = () => {
	const { logout } = useAuthStore();
	const user: AuthUser = { username: "EzzElddin" };

	const handleSearch = () => {
		console.log("Search clicked");
	};

	return (
		<AppBar position="static" sx={{ background: "white" }}>
			<Toolbar>
				<Typography
					variant="h6"
					component="div"
					sx={{ flexGrow: 1, color: "GrayText", fontWeight: "bold" }}
				>
					Welcome {user?.username},
				</Typography>

				<SearchContainer onSearch={handleSearch} />

				<Button variant="contained" color="primary" onClick={logout}>
					<Link style={{ textDecoration: "none", color: "white" }} to="/">
						Log Out
					</Link>
				</Button>

				<IconButton color="inherit" sx={{ color: " #13577c" }}>
					<Badge badgeContent={3} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>

				<IconButton
					color="inherit"
					sx={{ color: " #13577c", paddingRight: "20px" }}
				>
					<Badge badgeContent={2} color="error">
						<MailOutlineIcon />
					</Badge>
				</IconButton>

				<Avatar alt="Avatar" src="src/assets/images.png" />
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
