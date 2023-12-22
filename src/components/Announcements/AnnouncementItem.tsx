import {
	Avatar,
	Grid,
	ListItem,
	ListItemAvatar,
	Typography,
} from "@mui/material";
import Announcement from "../../entities/Announcement";

interface AnnouncementItemProps {
	announcement: Announcement;
	isMobileOrTablet: boolean;
}

const AnnouncementItem = ({
	announcement,
	isMobileOrTablet,
}: AnnouncementItemProps) => {
	return (
		<ListItem alignItems="center" divider>
			<ListItemAvatar>
				<Avatar alt="User" src="src/assets/images.png" />
			</ListItemAvatar>
			<Grid container alignItems="center" spacing={isMobileOrTablet ? 1 : 2}>
				<Grid item>
					<div>
						<Typography variant="body1">{announcement.announcer}</Typography>
						<Typography variant="body2" color="textSecondary">
							{announcement.date}
						</Typography>
					</div>
				</Grid>
				<Grid item>
					<Typography variant="body2" color="textPrimary">
						{announcement.content}
					</Typography>
				</Grid>
			</Grid>
		</ListItem>
	);
};

export default AnnouncementItem;
