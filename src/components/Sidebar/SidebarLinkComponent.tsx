import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SidebarLink from "../../entities/SidebarLink";

interface SidebarLinkProps {
	link: SidebarLink;
	selected: boolean;
	onClick: () => void;
	hideLabelOnMobile: boolean;
}

const SidebarLinkComponent = ({
	link,
	selected,
	onClick,
	hideLabelOnMobile,
}: SidebarLinkProps) => {
	return (
		<ListItemButton
			onClick={onClick}
			sx={{
				"&:hover": {
					backgroundColor: "#1e4869",
				},
				marginBottom: "25px",
				backgroundColor: selected ? "#1e4869" : "transparent",
			}}
		>
			<ListItemIcon sx={{ color: "#fff", marginRight: "-20px" }}>
				{link.icon}
			</ListItemIcon>
			{!hideLabelOnMobile && (
				<ListItemText primary={link.label} sx={{ color: "#fff" }} />
			)}
		</ListItemButton>
	);
};

export default SidebarLinkComponent;
