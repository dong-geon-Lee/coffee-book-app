import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container, Header, Logo, Section, Title } from "./styles";
import back from "../../assets/back.svg";
import coffee8 from "../../assets/coffee8.svg";
import NavMenu from "../NavMenu/NavMenu";

const Product = () => {
  const location = useLocation();
  const { product } = location.state;

  console.log(location, product);

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>

          <Title>상품페이지</Title>
          <Logo src={coffee8} alt="logo" className="logo" />
        </Header>
      </Section>

      <NavMenu />
    </Container>
  );
};

export default Product;
