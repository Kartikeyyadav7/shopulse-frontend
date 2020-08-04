const styles = (theme) => ({
	root: {
		flexGrow: 1,
		marginRight: "1rem",
		[theme.breakpoints.down("xs")]: {
			marginRight: "0rem",
		},
	},
	paper1: {
		padding: `1rem`,
		margin: `2rem 0`,
		maxWidth: 600,
		[theme.breakpoints.down("xs")]: {
			margin: `2rem 0rem 0 0`,
			padding: `1rem`,
		},
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
});

export default styles;
