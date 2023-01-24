import NavMenu from "../../components/NavMenu/NavMenu";
import back from "../../assets/back.svg";
import heart from "../../assets/heart2.svg";
import checked from "../../assets/checked.svg";
import { Link } from "react-router-dom";
import {
  COMPLETE__ORDER,
  DETAIL__PAYMENT__MESSAGE,
} from "../../constants/constants";
import {
  Button,
  Container,
  Div,
  Header,
  Logo,
  OrderBox,
  Section,
  Text,
  Title,
} from "./styles";

const Checkout = () => {
  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>결제</Title>
          <Logo src={heart} alt="logo" className="logo" />
        </Header>

        <OrderBox>
          <Div>
            <Logo src={checked} className="checked" />
            <Title className="order__completed">{COMPLETE__ORDER}</Title>
            <Text>{DETAIL__PAYMENT__MESSAGE}</Text>
          </Div>

          <Div className="btn__group">
            <Link to="/home">
              <Button className="home__btn">메인페이지</Button>
            </Link>
            <Link to="/details">
              <Button className="checkout__btn">결제내역</Button>
            </Link>
          </Div>
        </OrderBox>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Checkout;
