import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import {
  Section,
  Container,
  Header,
  Logo,
  Title,
  Div,
  Img,
  ImgBox,
  ContentBox,
  Text,
  Price,
  ButtonBox,
  Button,
  Btns,
  Center,
  Label,
  Bottom,
  ItemBox,
  Span,
  SubText,
} from "./styles";
import back from "../../assets/back.svg";
import cart from "../../assets/cart2.svg";
import x from "../../assets/delete.svg";
import { coffeeItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";

const CartItems = () => {
  const coffeeLists = useRecoilValue(coffeeItemState);
  const items = coffeeLists.slice(0, 3);
  console.log(items);

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>장바구니</Title>
          <Logo src={cart} alt="logo" className="logo" />
        </Header>

        <Center>
          {items.map((item) => (
            <Div key={item.id}>
              <ImgBox>
                <Img src={item.image} alt="img" />
              </ImgBox>
              <ContentBox>
                <Text>{item.title}</Text>
                <SubText>크기: {item.size[1]}</SubText>
                <Price>{item.price[1]}원</Price>
              </ContentBox>
              <ButtonBox>
                <Btns>
                  <Button>-</Button>
                  <Title>1</Title>
                  <Button>+</Button>
                </Btns>

                <Logo src={x} alt="logo" className="xBtn" />
              </ButtonBox>
            </Div>
          ))}
        </Center>

        <Bottom>
          <ItemBox>
            <Label>상품금액</Label>
            <Span>+ 17,500 원</Span>
          </ItemBox>

          <ItemBox>
            <Label>배송비</Label>
            <Span>+ 2,500 원</Span>
          </ItemBox>

          <ItemBox>
            <Label>주문금액</Label>
            <Span>20,000 원</Span>
          </ItemBox>

          <Button className="checkout__btn">결제하기</Button>
        </Bottom>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default CartItems;
