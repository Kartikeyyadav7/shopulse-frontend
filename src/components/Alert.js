import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";

const Alerts = ({ alerts }) => {
	// console.log("From the alert component", alerts);
	return (
		alerts !== null &&
		alerts.length > 0 &&
		alerts.map((alert) => (
			<Alert severity={alert.alertType}>{alert.msg.msg.toString()}</Alert>
		))
	);
};
// alerts !== null &&
// alerts.length > 0 &&
// alerts.map((alert) => <Alert severity={alert.alertType}>{alert.msg}</Alert>);

Alerts.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alerts);
