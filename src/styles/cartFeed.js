const styles = (theme) => ({
	root: {
		marginRight: theme.spacing(4),
		flexWrap: "wrap",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},

	products: {
		width: `50%`,
		[theme.breakpoints.down("xs")]: {
			width: `100%`,
		},
	},
	paper: {
		width: `50%`,
		height: `25vh`,
		[theme.breakpoints.down("xs")]: {
			width: `100%`,
		},
		marginTop: "2rem",
	},
	button: {
		maxWidth: "16rem",
		width: `100%`,
		margin: `1rem 0 0 9rem`,
		[theme.breakpoints.down("xs")]: {
			margin: `1rem 1rem`,
		},
	},
});

export default styles;
