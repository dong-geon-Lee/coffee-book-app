import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../../assets/back.svg";
import coffee8 from "../../assets/coffee8.svg";
import star from "../../assets/star.svg";
import star0 from "../../assets/star3.svg";
import NavMenu from "../NavMenu/NavMenu";
import {
  coffeeItemState,
  likeItemState,
  coffeeProps,
  quantityState,
  totalPriceState,
  selectedSizeState,
  recordedQtyState,
  recordedCartItemState,
} from "../../atoms/coffeeItemState";
import {
  BtnBox,
  Button,
  Buttons,
  Container,
  ContentBox,
  Contents,
  CountBox,
  Description,
  Div,
  Header,
  Img,
  ImgBox,
  Logo,
  LogoBox,
  PriceBox,
  PriceText,
  Section,
  SizeBox,
  Title,
} from "./styles";

interface itemProps {
  id?: number;
  size?: string;
  price?: number;
  active: boolean | undefined;
}

const Product = () => {
  const [selectedSize, setSelectedSize] = useRecoilState(selectedSizeState);
  const [quantity, setQuantity] = useRecoilState(quantityState);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setRecordedQty] = useRecoilState(recordedQtyState);

  const recordedCartItem = useRecoilValue(recordedCartItemState);
  const coffeeItem = useRecoilValue(coffeeItemState);
  const likeItem = useRecoilValue(likeItemState);

  const setRecordedCartItem = useSetRecoilState(recordedCartItemState);
  const setLikeItem = useSetRecoilState(likeItemState);

  const { state } = useLocation();
  const { id, title, description, image, stars, product } = state.product;

  let total: number | undefined;

  const active = product
    .map((x: any) => x.price)
    .findIndex((x: any) => x === selectedSize);

  const target = coffeeItem.find((item: coffeeProps) => item.id === id);
  const activeLikes = likeItem.find(
    (item: coffeeProps) => item.id === target?.id
  );

  const handleLikes = () => {
    setLikeItem([...likeItem, { ...target, likes: !target?.likes }]);
  };

  const handlePlusClick = () => {
    if (quantity > 8) return;
    setQuantity((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    if (quantity < 2) return;
    setQuantity((prevState) => prevState - 1);
  };

  const handleResetMenu = (price: any) => {
    setQuantity(1);
    setSelectedSize(price);
    setTotalPrice(price);
  };

  const list = product.find((p: any) => p.price === selectedSize);
  const cartItems = {
    id: "AC" + Math.floor(Math.random() * 10000) + "CF",
    size: list?.size,
    price: list?.price,
    image,
    title,
    recordedQty: quantity,
    total: (total = totalPrice * quantity),
  };

  const handleCartItem = () => {
    setTotalPrice(selectedSize * quantity);
    setRecordedQty(quantity);
    setRecordedCartItem([...recordedCartItem, cartItems]);
    setQuantity(0);
    setSelectedSize(0);
  };

  const arrowResetBtn = () => {
    setQuantity(0);
    setSelectedSize(0);
  };

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home" onClick={arrowResetBtn}>
            <Logo src={back} alt="logo" />
          </Link>

          <Title>상품페이지</Title>
          <Logo src={coffee8} alt="logo" className="logo" />
        </Header>

        <ImgBox>
          <Img src={image} />
        </ImgBox>

        <ContentBox>
          <Contents>
            <Title className="content__title">{title}</Title>
            <LogoBox>
              {stars.map((stars: number) => (
                <Logo
                  key={Math.random() * 5}
                  src={stars === 1 ? star : star0}
                  alt="star"
                  className="stars"
                />
              ))}
            </LogoBox>
          </Contents>
          <Description>{description}</Description>

          <SizeBox>
            {product.map((item: itemProps) => (
              <Div key={item.id}>
                <Button
                  onClick={() => handleResetMenu(item.price)}
                  active={item.id === active + 1}
                >
                  {item.size}
                </Button>
              </Div>
            ))}
          </SizeBox>

          <PriceBox>
            <PriceText>
              상품 가격:
              {new Intl.NumberFormat("ko-KR", {
                maximumSignificantDigits: 3,
              }).format(selectedSize * quantity)}
              원
            </PriceText>

            <CountBox>
              <Buttons
                className="minus"
                onClick={handleMinusClick}
                disabled={active + 1 ? false : true}
              >
                -
              </Buttons>
              <Title className="quantity">{quantity}</Title>
              <Buttons
                className="plus"
                onClick={handlePlusClick}
                disabled={active + 1 ? false : true}
              >
                +
              </Buttons>
            </CountBox>
          </PriceBox>

          <BtnBox>
            <Buttons
              className="likes"
              onClick={handleLikes}
              disabled={activeLikes?.likes ? true : false}
            >
              좋아요
            </Buttons>
            <Buttons
              className="carts"
              onClick={handleCartItem}
              disabled={active + 1 ? false : true}
            >
              장바구니
            </Buttons>
          </BtnBox>
        </ContentBox>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Product;
