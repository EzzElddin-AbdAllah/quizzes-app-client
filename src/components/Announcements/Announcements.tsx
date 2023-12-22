import {
	Card,
	CardContent,
	Grid,
	List,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Announcement from "../../entities/Announcement";
import AnnouncementItem from "./AnnouncementItem";

const Announcements = () => {
	const fetchAnnouncements = async () => {
		const response = await fetch("http://localhost:3001/api/announcements");
		const data: Announcement[] = await response.json();
		return data;
	};

	const {
		data: announcements,
		isLoading,
		isError,
	} = useQuery({ queryKey: ["announcements"], queryFn: fetchAnnouncements });

	const theme = useTheme();
	const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching announcements</p>;
	}

	// Only take the first 4 announcements
	const firstFiveAnnouncements = announcements.slice(0, 4);

	return (
		<Grid
			container
			direction="column"
			alignItems="stretch"
			sx={{ flexGrow: 1 }}
			spacing={2}
		>
			<Grid item xs={12}>
				<Card sx={{ flexGrow: 1 }}>
					<CardContent>
						<Typography variant="h5" component="div" gutterBottom>
							Announcements
						</Typography>

						<List>
							{firstFiveAnnouncements.map((announcement) => (
								<AnnouncementItem
									key={announcement.id}
									announcement={announcement}
									isMobileOrTablet={isMobileOrTablet}
								/>
							))}
						</List>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Announcements;
