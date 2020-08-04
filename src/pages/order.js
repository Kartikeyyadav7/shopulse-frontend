import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getOrder } from "../redux/actions/orderAction";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
// import OrderFeed from "../components/CartFeed";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const Order = ({ order: { order, loading }, getOrder }) => {
	useEffect(() => {
		getOrder();
	}, [getOrder]);
	let orderContent;
	if (order === undefined || loading) {
		orderContent = <CircularProgress />;
	} else if (order === null) {
		orderContent = (
			<Typography
				variant="h4"
				style={{ textAlign: "center", marginTop: "5rem" }}
			>
				Please Buy Something First
				<Button
					size="small"
					color="secondary"
					variant="contained"
					component={Link}
					to="/"
					style={{
						display: "block",
						width: "150px",
						marginLeft: "38rem",
						marginTop: "2rem",
					}}
				>
					Continue Shopping
				</Button>
			</Typography>
		);
	} else {
		// orderContent = <OrderFeed key={uuidv4()} order={order} />;
		orderContent = <h1 style={{ textAlign: "center" }}>My orders</h1>;
	}
	return <div>{orderContent}</div>;
};

const mapStateToProps = (state) => ({
	order: state.order,
});

export default connect(mapStateToProps, { getOrder })(
	withStyles(withStyles)(Order)
);
