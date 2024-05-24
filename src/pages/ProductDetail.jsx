// ProductDetail.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../../public/courses";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		// Find the product with the matching id from the JSON data
		const selectedProduct = courses.find(
			(course) => course.id.toString() === id
		);

		if (selectedProduct) {
			setProduct(selectedProduct);
		} else {
			// Handle the case where the product with the given id is not found
			console.error(`Product with id ${id} not found`);
		}
	}, [id]);

	return (
		<div>
			<h2>Product Detail Page</h2>
			{product ? (
				<div>
					<img src={product.thumbnail} alt="Product" />
					<h3>{product.title}</h3>
					<h3>$ {product.price}</h3>
					<p>{product.description}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ProductDetail;
