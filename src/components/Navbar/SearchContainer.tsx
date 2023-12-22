import React from "react";
import { InputBase, IconButton, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearchContainer = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "20px",
	marginLeft: 0,
	height: "30px",
	border: `1px solid ${theme.palette.divider}`,
	display: "flex",
	alignItems: "center",
	"& input": {
		borderRadius: theme.shape.borderRadius,
		padding: "10px",
		flex: 1,
	},
	"& button": {
		padding: "10px",
	},
}));

interface SearchContainerProps {
	onSearch: () => void;
}

const SearchContainer = ({ onSearch }: SearchContainerProps) => {
	return (
		<StyledSearchContainer>
			<IconButton onClick={onSearch}>
				<SearchIcon />
			</IconButton>
			<InputBase placeholder="Search..." />
		</StyledSearchContainer>
	);
};

export default SearchContainer;
