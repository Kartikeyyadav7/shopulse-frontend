import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import styles from "../styles/cartItems";
import withStyles from "@material-ui/core/styles/withStyles";

const CartItems = ({ classes, order }) => {
	return (
		<div className={classes.root}>
			<Paper className={classes.paper1}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img className={classes.img} alt="complex" src={product.image} />
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									{product.name}
								</Typography>
								<Typography gutterBottom variant="subtitle1">
									Qty : {product.quantity}
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant="subtitle1"> $ {finalPrice}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(CartItems);
