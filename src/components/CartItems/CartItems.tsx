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
import {
  coffeeItemState,
  recordedCartItemState,
} from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";

const CartItems = () => {
  const coffeeLists = useRecoilValue(coffeeItemState);
  const items = coffeeLists.slice(0, 3);
  console.log(items);

  const recordedCartItem = useRecoilValue(recordedCartItemState);
  const total = recordedCartItem.reduce(
    (acc: any, cur: any) => acc + cur.total,
    0
  );

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
          {recordedCartItem.map((item: any) => (
            <Div key={item.id}>
              <ImgBox>
                <Img src={item.image} alt="img" />
              </ImgBox>
              <ContentBox>
                <Text>{item.title}</Text>
                <Price>
                  {new Intl.NumberFormat("ko-KR", {
                    maximumSignificantDigits: 3,
                  }).format(item.price)}
                  원
                </Price>
                <Text>Size: {item.size}</Text>
              </ContentBox>
              <ButtonBox>
                <Btns>
                  <Text className="qty">상품: {item.recordedQty} 개</Text>
                </Btns>

                <Logo src={x} alt="logo" className="xBtn" />
              </ButtonBox>
            </Div>
          ))}
        </Center>

        <Bottom>
          <ItemBox>
            <Label>상품금액</Label>
            <Span>
              +
              {new Intl.NumberFormat("ko-KR", {
                maximumSignificantDigits: 3,
              }).format(total)}
              원
            </Span>
          </ItemBox>

          <ItemBox>
            <Label>배송비</Label>
            <Span>
              +
              {new Intl.NumberFormat("ko-KR", {
                maximumSignificantDigits: 3,
              }).format(2500)}
              원
            </Span>
          </ItemBox>

          <ItemBox>
            <Label>주문금액</Label>
            <Span>
              {new Intl.NumberFormat("ko-KR", {
                maximumSignificantDigits: 3,
              }).format(total + 2500)}
              원
            </Span>
          </ItemBox>

          <Button className="checkout__btn">결제하기</Button>
        </Bottom>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default CartItems;
