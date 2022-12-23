import { useLocation, useParams } from "react-router-dom";
import { Container } from "./styles";

const Product = () => {
  // const { id } = useParams();
  const location = useLocation();
  const { product } = location.state;

  console.log(location, product);

  return (
    <Container>
      <h1>이상한데</h1>
    </Container>
  );
};

export default Product;
