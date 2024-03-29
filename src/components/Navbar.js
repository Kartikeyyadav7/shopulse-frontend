import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styles from "../styles/Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { logoutUser } from "../redux/actions/authAction";
import Shopulse from "../images/shopulse-logo4.png";

function Navbar({ classes, logoutUser, auth }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
 
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const guestNavbar = (
		<div className={classes.root}> 
			<AppBar position="static">
				<Toolbar className={classes.container}>
					<Button
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						<img src={Shopulse} alt="logo" />
					</Button>
					<div>
						<Button
							color="inherit"
							className={classes.buttonLogin}
							component={Link}
							to="/login"
						>
							Login
						</Button>
						<Button
							color="inherit"
							className={classes.buttonSignUp}
							component={Link}
							to="/signup"
						>
							Signup
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
	const menuId = "primary-search-account-menu";
	const authNavbar = (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar className={classes.container}>
					<Button
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						<img src={Shopulse} alt="logo" />
					</Button>

					<div>
						<Button
							color="inherit"
							className={classes.button}
							component={Link}
							to="/mycart"
						>
							<ShoppingCartIcon />
						</Button>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							color="inherit"
							onClick={handleClick}
							className={classes.buttonSignUp}
						>
							<AccountCircle />
						</IconButton>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);

	return <div>{auth.isAuthenticated ? authNavbar : guestNavbar}</div>;
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles)(Navbar)
);
