// ProductListing.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courses from "../../public/courses";

const ProductListing = () => {
	const [products, setProducts] = useState([]);
	console.log(products);
	useEffect(() => {
		setProducts(courses);
	}, []);

	return (
		<div>
			<h2>Product Listing</h2>
			<div className="product-grid">
				{products?.map((product) => (
					<div key={product.id} className="product-card">
						<Link to={`/products/${product.id}`}>
							<img src={product.thumbnail} alt={product.title} />
							<h3>{product.title}</h3>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductListing;
