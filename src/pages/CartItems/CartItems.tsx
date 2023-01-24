import Spinner from "../../components/Spinner/Spinner";
import NavMenu from "../../components/NavMenu/NavMenu";
import back from "../../assets/back.svg";
import cart from "../../assets/cart2.svg";
import emptyCart from "../../assets/cart3.svg";
import xIcons from "../../assets/delete.svg";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { cartItemProps } from "../../@types/types";
import { formattedNumber, removeCartItem } from "../../helpers/helpers";
import { CART__EMPTY, SHIPPING__COST } from "../../constants/constants";
import {
  cartItemTotalState,
  paymentDetailState,
} from "../../recoils/coffeeItemState";
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

const CartItems = () => {
  const [activeSpinner, setActiveSpinner] = useState(false);

  const authUser = useRecoilValue(authUserState);
  const { cartLists } = useRecoilValue(authUserState);
  const cartItemTotal = useRecoilValue(cartItemTotalState);
  const paymentDetails = useRecoilValue(paymentDetailState);

  const setUserCartLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);
  const setPaymentDetails = useSetRecoilState(paymentDetailState);

  const navigate = useNavigate();

  const handleRemoveCartItems = (id: string) => {
    const newItems = removeCartItem(cartLists, id);

    setUserCartLists({ ...authUser, cartLists: newItems });
    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return { ...authUser, cartLists: newItems };
        }

        return { ...user };
      });
    });
  };

  const handleCheckout = () => {
    setActiveSpinner(true);
    setPaymentDetails([...paymentDetails, ...cartLists]);
    setUserCartLists({ ...authUser, cartLists: [] });
    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return { ...authUser, cartLists: [] };
        }

        return { ...user };
      });
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveSpinner(false);
      if (activeSpinner) navigate("/checkout");
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeSpinner]);

  return (
    <Container>
      <Section items={cartLists}>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>장바구니</Title>
          <Logo src={cart} alt="logo" className="logo" />
        </Header>

        {activeSpinner && <Spinner />}

        <Center items={cartLists.length}>
          {cartLists.length > 0 ? (
            cartLists.map((item: cartItemProps) => (
              <Div key={item.id}>
                <ImgBox>
                  <Img src={item.image} alt="img" />
                </ImgBox>
                <ContentBox>
                  <Text items={cartLists.length}>{item.title}</Text>
                  <Price className="price">
                    {formattedNumber(Number(item.price))}원
                  </Price>
                  <Text className="size" items={cartLists.length}>
                    크기: {item.size}
                  </Text>
                </ContentBox>
                <ButtonBox>
                  <Btns>
                    <Text className="qty" items={cartLists.length}>
                      상품: {item.recordedQty} 개
                    </Text>
                  </Btns>

                  <Logo
                    src={xIcons}
                    alt="logo"
                    className="xBtn"
                    onClick={() => handleRemoveCartItems(String(item.id))}
                  />
                </ButtonBox>
              </Div>
            ))
          ) : (
            <EmptyBox className="empty__box">
              <Background img={emptyCart} />
              <EmptyText className="empty__text">{CART__EMPTY}</EmptyText>
            </EmptyBox>
          )}
        </Center>

        {cartLists.length > 0 && (
          <Bottom>
            <ItemBox>
              <Label>상품금액</Label>
              <Span>+{formattedNumber(cartItemTotal - SHIPPING__COST)}원</Span>
            </ItemBox>

            <ItemBox>
              <Label>배송비</Label>
              <Span>+{formattedNumber(SHIPPING__COST)}원</Span>
            </ItemBox>

            <ItemBox>
              <Label>주문금액</Label>
              <Span>{formattedNumber(cartItemTotal)} 원</Span>
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
