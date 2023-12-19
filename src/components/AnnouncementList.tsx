import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	Grid,
} from "@mui/material";

const Announcements = () => {
	return (
		<Grid
			container
			direction="column"
			alignItems="stretch"
			sx={{ flexGrow: 1 }}
		>
			<Card sx={{ flexGrow: 1 }}>
				<CardContent>
					{/* Title */}
					<Typography variant="h5" component="div" gutterBottom>
						Announcements
					</Typography>

					{/* List of announcements */}
					<List sx={{ flexGrow: 1 }}>
						{/* Announcement 1 */}
						<ListItem alignItems="center">
							<ListItemAvatar>
								<Avatar alt="User" src="/path/to/avatar1.jpg" />
							</ListItemAvatar>
							<Grid container alignItems="center" spacing={2}>
								<Grid item>
									{/* Name and Date */}
									<div>
										<Typography variant="body1">John Doe</Typography>
										<Typography variant="body2" color="textSecondary">
											September 20, 2023
										</Typography>
									</div>
								</Grid>
								<Grid item>
									{/* Announcement content */}
									<Typography variant="body2" color="textPrimary">
										Announcement content goes here.
									</Typography>
								</Grid>
							</Grid>
						</ListItem>

						{/* Announcement 2 */}
						<ListItem alignItems="center">
							<ListItemAvatar>
								<Avatar alt="User" src="/path/to/avatar2.jpg" />
							</ListItemAvatar>
							<Grid container alignItems="center" spacing={2}>
								<Grid item>
									{/* Name and Date */}
									<div>
										<Typography variant="body1">Jane Doe</Typography>
										<Typography variant="body2" color="textSecondary">
											September 21, 2023
										</Typography>
									</div>
								</Grid>
								<Grid item>
									{/* Announcement content */}
									<Typography variant="body2" color="textPrimary">
										Another announcement content goes here.
									</Typography>
								</Grid>
							</Grid>
						</ListItem>

						{/* Add more announcements as needed */}
					</List>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Announcements;
