// import { fade } from "@material-ui/core/styles";

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

// [theme.breakpoints.down("xs")]: {
// 	width: "400px",
// 	paddingRight: "0rem",
// 	marginRight: "0rem",
// },
// [theme.breakpoints.down("xs")]: {
// 	width: "400px",
// },

// search: {
// 	position: "relative",
// 	borderRadius: theme.shape.borderRadius,
// 	backgroundColor: fade(theme.palette.common.white, 0.15),
// 	"&:hover": {
// 		backgroundColor: fade(theme.palette.common.white, 0.25),
// 	},
// 	marginRight: theme.spacing(2),
// 	marginLeft: 0,
// 	width: "100%",
// 	[theme.breakpoints.up("sm")]: {
// 		marginLeft: theme.spacing(3),
// 		width: "auto",
// 	},
// },
// searchIcon: {
// 	padding: theme.spacing(0, 2),
// 	height: "100%",
// 	position: "absolute",
// 	pointerEvents: "none",
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "center",
// },

// inputRoot: {
// 	color: "inherit",
// },
// inputInput: {
// 	padding: theme.spacing(1, 1, 1, 0),
// 	paddingLeft: `calc(1rem + ${theme.spacing(4)}px)`,
// 	transition: theme.transitions.create("width"),
// 	width: "100%",
// 	[theme.breakpoints.up("md")]: {
// 		width: "20ch",
// 	},
// },
