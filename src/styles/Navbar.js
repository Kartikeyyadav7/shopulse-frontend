const styles = (theme) => ({
	root: {
		flexGrow: 1,
		margin: "0",
	},
	container: {
		maxWidth: "1100px",
		width: `100%`,
		margin: `0 auto`,
		padding: "0",
	},
	title: {
		flexGrow: 1,
		justifyContent: "inherit",
	},
	buttonSignUp: {
		marginRight: theme.spacing(2),
	},
 
	buttonLogin: {
		marginRight: theme.spacing(3),
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},

	profile: {
		marginRight: theme.spacing(4),
		marginLeft: theme.spacing(-4),
	},
});

export default styles;
