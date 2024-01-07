import { React, useState } from "react";
import { AppBar, Toolbar, Tab, Tabs, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [value, setValue] = useState(0);

	return (
		<div>
			<AppBar sx={{ backgroundColor: "black" }} position="sticky">
				<Toolbar>
					<Typography>
						<LibraryBooksIcon />
					</Typography>
					<Tabs
						sx={{ ml: "auto" }}
						textColor="inherit"
						indicatorColor="secondary"
						value={value}
						onChange={(e, val) => setValue(val)}
					>
						<Tab component={NavLink} to="/add" label="Add Product" />
						<Tab component={NavLink} to="/books" label="Books" />
						<Tab component={NavLink} to="/about" label="About Us" />
					</Tabs>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
