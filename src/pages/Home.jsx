// Home.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courses from "../../public/courses.js";

const Home = () => {
	const [trendingProducts, setTrendingProducts] = useState([]);

	useEffect(() => {
		// Slice the data to get 3 trending products
		const slicedTrendingProducts = courses.slice(0, 6);
		setTrendingProducts(slicedTrendingProducts);
	}, []);

	return (
		<div>
			<h2>Home Page</h2>
			<span>Trending Products ????</span>
			<div className="product-grid">
				{trendingProducts?.map((product) => (
					<div key={product.id} className="product-card">
						<Link to={`/products/${product.id}`}>
							<img src={product.thumbnail} alt={product.title} />
							<h3>{product.title}</h3>
						</Link>
					</div>
				))}
			</div>

			<Link to="/products">
				<button style={{ width: "100%", padding: 10 }}>
					View All Products
				</button>
			</Link>
		</div>
	);
};

export default Home;
