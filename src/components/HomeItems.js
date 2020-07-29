import React from "react";
import styles from "../styles/homeItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { addProductToCart } from "../redux/actions/cartAction";
import { connect } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const HomeItems = ({ classes, products, addProductToCart, auth }) => {
	const [open, setOpen] = React.useState(false);
	const [age, setAge] = React.useState(1);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const addProduct = () => {
		console.log(`clicked ${products._id}`);
		setOpen(true);

		addProductToCart({
			product: products._id,
			name: products.name,
			image: products.productImage,
			price: products.price,
			quantity: age,
		});
	};
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<img
					className={classes.media}
					src={products.productImage}
					alt={products.name}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{products.name}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{products.description}
					</Typography>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label">Qty</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={age}
							onChange={handleChange}
						>
							<MenuItem value={1}>1</MenuItem>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
							<MenuItem value={5}>5</MenuItem>
						</Select>
					</FormControl>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					$ {products.price}
				</Button>
				{auth.isAuthenticated ? (
					<Button
						size="small"
						color="primary"
						onClick={addProduct}
						variant="contained"
					>
						Add To Cart
					</Button>
				) : (
					<Button
						size="small"
						color="primary"
						component={Link}
						to="/login"
						variant="contained"
					>
						Add To Cart
					</Button>
				)}

				<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="success"
						className={classes.alert}
					>
						"Product added to cart"
					</Alert>
				</Snackbar>
			</CardActions>
		</Card>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { addProductToCart })(
	withStyles(styles)(HomeItems)
);
