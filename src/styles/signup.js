const styles = (theme) => ({
	signupPage: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexWrap: "wrap",
		margin: "1rem auto",
		maxWidth: "1100px",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "row",
		},
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		alignContent: "flexStart",
		width: "525px",
		[theme.breakpoints.down("xs")]: {
			justifyContent: "center",
		},
	},
	formField: {
		margin: "1.2rem",
		marginTop: "1.3rem",
	},
	image: {
		width: "330px",
		height: "188px",
		marginTop: "-40px",
	},
	button: {
		width: "14rem",
		borderRadius: "2rem",
		right: "-10rem",
		marginTop: "1rem",
		marginBottom: "1rem",
		[theme.breakpoints.down("xs")]: {
			right: "0rem",
		},
	},
});

export default styles;
