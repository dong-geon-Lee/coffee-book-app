import NavMenu from "../NavMenu/NavMenu";
import {
  Container,
  Section,
  Logo,
  Title,
  Header,
  Div,
  Card,
  Text,
  EmptyBox,
  Background,
  LogoText,
} from "./styles";
import back from "../../assets/back.svg";
import note from "../../assets/note.svg";
import payment from "../../assets/payment.svg";
import { Link } from "react-router-dom";
import { paymentDetailState } from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../atoms/userAuthState";

const PaymentDetails = () => {
  const paymentDetail = useRecoilValue(paymentDetailState);
  const authUser = useRecoilValue(authUserState);
  const items = paymentDetail.filter(
    (item: any) => item.orderUser === authUser.userId
  );

  console.log(paymentDetail);
  console.log(items);

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/profiles">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>결제내역</Title>
          <Logo src={note} alt="logo" className="logo" />
        </Header>

        {items.length === 0 && (
          <EmptyBox>
            <Background img={payment}></Background>
            <LogoText>No payment details.</LogoText>
          </EmptyBox>
        )}

        <Div>
          {items.map((item: any) => (
            <Card key={item.id}>
              <Text>주문코드: {item.id}</Text>
              <Text className="title">제품: {item.title}</Text>
              <Text>크기: {item.size}</Text>
              <Text>가격: {item.price}원</Text>
              <Text>수량: {item.recordedQty}개</Text>
              <Text>주문합계: {item.total}원</Text>
              <Text className="dates">결제날짜: {item.orderDate}</Text>
            </Card>
          ))}
        </Div>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default PaymentDetails;
