import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { getCartDetails } from "../redux/actions/cartAction";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import CartFeed from "../components/CartFeed";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Cart = ({ cart: { inCart, loading }, getCartDetails }) => {
	useEffect(() => {
		getCartDetails();
	}, [getCartDetails]);
	let cartContent;
	console.log(inCart.products);
	if (loading) {
		cartContent = <CircularProgress />;
	} else if (
		inCart.products === [] ||
		inCart.products === null ||
		inCart.products === undefined ||
		inCart === undefined
	) {
		cartContent = (
			<div
				style={{
					maxWidth: `500px`,
					width: `100%`,

					margin: `5rem auto`,
					display: `flex`,
					flexDirection: `column`,
					justifyContent: `center`,
					alignItems: `center`,
				}}
			>
				<Typography
					variant="h4"
					style={{ textAlign: "center", marginTop: "5rem" }}
				>
					Add Products for Checkout
				</Typography>
				<Button
					size="small"
					color="secondary"
					variant="contained"
					component={Link}
					to="/"
					style={{
						display: "block",
						width: `30%`,
						marginTop: "1rem",
					}}
				>
					Continue Shopping
				</Button>
			</div>
		);
	} else {
		cartContent = <CartFeed key={uuidv4()} inCart={inCart} />;
	}

	return <div>{cartContent}</div>;
};

const mapStateToProps = (state) => ({
	cart: state.cart,
});

export default connect(mapStateToProps, { getCartDetails })(
	withStyles(withStyles)(Cart)
);
