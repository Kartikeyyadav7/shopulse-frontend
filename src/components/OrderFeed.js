import React from "react";
import OrderItems from "./CartItems";
import styles from "../styles/cartFeed";
import withStyles from "@material-ui/core/styles/withStyles";

function OrderFeed({ order, classes }) {
	return (
		<div className={classes.products}>
			{order.map((product) => (
				<OrderItems key={order.id} product={order} />
			))}
		</div>
	);
}

export default withStyles(styles)(OrderFeed);
