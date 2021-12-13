import React from "react";
import HomeItems from "./HomeItems";

function HomeFeed({ products }) {
	return products.map((prod) => <HomeItems key={prod.id} products={prod} />);
}

export default HomeFeed;
 