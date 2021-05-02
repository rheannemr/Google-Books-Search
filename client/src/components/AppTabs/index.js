import React from "react";
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	appbar: {
		background: '#9fbeaf'
	},
	toolbarButtons: {
		marginLeft: 'auto',
		marginTop: '4.5px',
		marginRight: '43px'
	},
	textcolor: {
		color: 'black'
	}
}));

function AppTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			<AppBar className={classes.appbar} elevation={0}>
				<Tabs className={classes.textcolor} value={value} onChange={handleChange}>
					<Tab label="Search Books" component={Link} to={'/searchbooks'} />
					<Tab label="Saved Books" component={Link} to={'/savedbooks'} />
				</Tabs>
			</AppBar>
		</div>
	);
}

export default AppTabs;
