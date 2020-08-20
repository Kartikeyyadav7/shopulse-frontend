import React, { useState } from "react";
import styles from "../styles/login";
import withStyles from "@material-ui/core/styles/withStyles";
import shopulse from "../images/shopulse-logo.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authAction";
import PropTypes from "prop-types";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let userDetails = {
			email,
			password,
		};
		props.loginUser(userDetails);
	};

	if (props.isAuthenticated) {
		props.history.push("/");
	}

	const { classes } = props;
	return (
		<div className={classes.loginPage}>
			<img src={shopulse} alt="shopulse" className={classes.image} />
			<Typography
				variant="h4"
				style={{ marginBottom: "1rem", paddingRight: "1rem" }}
			>
				Welcome Back
			</Typography>
			<form noValidate onSubmit={handleSubmit} className={classes.form}>
				<TextField
					id="outlined-email-input"
					label="Email"
					value={email}
					onChange={handleEmail}
					type="email"
					autoComplete="current-email"
					variant="outlined"
					className={classes.formField}
				/>
				<TextField
					id="outlined-password-input"
					label="Password"
					value={password}
					onChange={handlePassword}
					type="password"
					autoComplete="current-password"
					variant="outlined"
					className={classes.formField}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}
				>
					Login
				</Button>
			</form>
			<Typography variant="body2" style={{ textAlign: "center" }}>
				Don't have an account <Link to="/signup">Signup</Link>
			</Typography>
		</div>
	);
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(
	withStyles(styles)(Login)
);
