import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 shadow-lg p-3 mb-5 bg-white rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>

        <Card.Body>
          <Link
            className="text-nowrap text-decoration-none "
            to={`/product/${product._id}`}
          >
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">৳{product.price}</Card.Text>
          <Button variant="outline-sucess">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
