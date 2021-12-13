import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/home";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { getProducts } from "../redux/actions/productAction";
import HomeFeed from "../components/HomeFeed";

function Home({ getProducts, product: { products, loading }, classes }) {
	useEffect(() => {
		getProducts();
	}, [getProducts]);
	let homeContent; 

	if (products === null || loading) {
		homeContent = <CircularProgress />;
	} else {
		console.log(products);
		homeContent = <HomeFeed key={uuidv4()} products={products} />;
	}

	return (
		<Grid
			container
			direction="row"
			justify="center"
			className={classes.itemGrid}
		>
			{homeContent}
		</Grid>
	);
}

const mapStateToProps = (state) => ({
	product: state.product,
});

export default connect(mapStateToProps, { getProducts })(
	withStyles(styles)(Home)
);
