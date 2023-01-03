import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import back from "../../assets/back.svg";
import heart from "../../assets/heart2.svg";
import checked from "../../assets/checked.svg";
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
            <Title className="order__completed">주문이 완료되었습니다!</Title>
            <Text>자세한 사항은 결제내역을 확인해 주세요</Text>
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
