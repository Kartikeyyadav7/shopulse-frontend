import React, { useState } from "react";
import styles from "../styles/signup";
import withStyles from "@material-ui/core/styles/withStyles";
import shopulse from "../images/shopulse-logo.png";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/actions/authAction";
import { connect } from "react-redux";

function Signup(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	if (props.auth.isAuthenticated) {
		props.history.push("/");
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let userDetails = {
			name: name,
			lastName: lastName,
			email: email,
			password: password,
		};
		props.registerUser(userDetails);
	};
	const { classes } = props;
	return (
		<div className={classes.signupPage}>
			<img src={shopulse} alt="shopulse" className={classes.image} />
			<form noValidate onSubmit={handleSubmit} className={classes.form}>
				<TextField
					id="outlined-name-input"
					label="Name"
					value={name}
					onChange={handleName}
					type="name"
					autoComplete="current-name"
					variant="outlined"
					className={classes.formField}
				/>
				<TextField
					id="outlined-lastName-input"
					label="LastName"
					value={lastName}
					onChange={handleLastName}
					type="lastName"
					autoComplete="current-lastName"
					variant="outlined"
					className={classes.formField}
				/>
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
					SignUp
				</Button>
			</form>
			<Typography variant="body2" style={{ textAlign: "center" }}>
				Already have an account <Link to="/login">Login</Link>
			</Typography>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(
	withStyles(styles)(Signup)
);
