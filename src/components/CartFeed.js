import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CartItems from "./CartItems";
import styles from "../styles/cartFeed";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import StripeCheckout from "react-stripe-checkout";
import { paymentOrder, setOrder } from "../redux/actions/orderAction";
import { connect } from "react-redux";

function CartFeed({ inCart, classes, paymentOrder, setOrder }) {
	const allProduct = inCart.products.map((product) => product);
	console.log(allProduct);
	const allAmount = inCart.products.map(
		(product) => product.price * product.quantity
	);
	const paymentAmount = allAmount.reduce((acc, curr) => acc + curr, 0);
	const makePayment = (token) => {
		const body = {
			token,
			paymentAmount,
		};
		paymentOrder(body);
	};
	const makeOrder = () => {
		setOrder({
			cart: inCart._id,
			price: paymentAmount,
		});
	};

	return (
		<div>
			<Grid item xs container direction="row">
				<div className={classes.products}>
					{inCart.products.map((product) => (
						<CartItems key={product.id} product={product} />
					))}
				</div>
				<Paper className={classes.paper}>
					<Grid container>
						<Grid item xs={12} sm container style={{ margin: "2rem" }}>
							<Grid item xs container direction="column" spacing={10}>
								<Grid item xs>
									<Typography
										gutterBottom
										variant="subtitle1"
										style={{ marginBottom: "18px" }}
									>
										Price - {inCart.products.length} Items
									</Typography>
									<Typography variant="subtitle1" gutterBottom>
										Delivery Fees
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item>
									<Typography variant="subtitle1">
										{" "}
										$ {paymentAmount}{" "}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1"> Free Delivery </Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<StripeCheckout
						stripeKey={process.env.REACT_APP_PAYMENT_KEY}
						token={makePayment}
						name="Make Payment"
						amount={paymentAmount * 100}
						shippingAddress
						billingAddress
					>
						<Button
							variant="contained"
							color="primary"
							style={{ margin: "2rem", width: "20rem" }}
							onClick={makeOrder}
						>
							Order
						</Button>
					</StripeCheckout>
				</Paper>
			</Grid>
		</div>
	);
}

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { paymentOrder, setOrder })(
	withStyles(styles)(CartFeed)
);
