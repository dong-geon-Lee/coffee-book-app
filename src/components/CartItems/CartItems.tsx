import { Link, useNavigate } from "react-router-dom";
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
  EmptyBox,
  EmptyText,
  Background,
} from "./styles";
import back from "../../assets/back.svg";
import cart from "../../assets/cart2.svg";
import emptyCart from "../../assets/cart3.svg";
import xIcons from "../../assets/delete.svg";
import { recordedCartItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const CartItems = () => {
  const [activeSpinner, setActiveSpinner] = useState(false);
  const navigate = useNavigate();

  const recordedCartItem = useRecoilValue(recordedCartItemState);
  const total = recordedCartItem.reduce(
    (acc: any, cur: any) => acc + cur.total,
    0
  );

  const setRecordedCartItem = useSetRecoilState(recordedCartItemState);
  const handleRemoveCartItems = (id: number) => {
    const newItems = recordedCartItem.filter((item: any) => item.id !== id);
    setRecordedCartItem(newItems);
  };

  const handleCheckout = () => {
    setActiveSpinner(true);
  };

  useEffect(() => {
    let timeId = setTimeout(() => {
      setActiveSpinner(false);
      if (activeSpinner) navigate("/checkout");
    }, 2000);

    return () => clearTimeout(timeId);
  }, [activeSpinner]);

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

        {activeSpinner ? (
          <Spinner />
        ) : (
          <Center items={recordedCartItem.length}>
            {recordedCartItem.length > 0 ? (
              recordedCartItem.map((item: any) => (
                <Div key={item.id}>
                  <ImgBox>
                    <Img src={item.image} alt="img" />
                  </ImgBox>
                  <ContentBox>
                    <Text items={recordedCartItem.length}>{item.title}</Text>
                    <Price className="price">
                      {new Intl.NumberFormat("ko-KR", {
                        maximumSignificantDigits: 3,
                      }).format(item.price)}
                      원
                    </Price>
                    <Text className="size" items={recordedCartItem.length}>
                      Size: {item.size}
                    </Text>
                  </ContentBox>
                  <ButtonBox>
                    <Btns>
                      <Text className="qty" items={recordedCartItem.length}>
                        상품: {item.recordedQty} 개
                      </Text>
                    </Btns>

                    <Logo
                      src={xIcons}
                      alt="logo"
                      className="xBtn"
                      onClick={() => handleRemoveCartItems(item.id)}
                    />
                  </ButtonBox>
                </Div>
              ))
            ) : (
              <EmptyBox className="empty__box">
                <Background img={emptyCart} />
                <EmptyText className="empty__text">
                  Your Cart is Empty.
                </EmptyText>
              </EmptyBox>
            )}
          </Center>
        )}

        {!activeSpinner && recordedCartItem.length > 0 && (
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

            <Button className="checkout__btn" onClick={handleCheckout}>
              결제하기
            </Button>
          </Bottom>
        )}
      </Section>
      <NavMenu />
    </Container>
  );
};

export default CartItems;
