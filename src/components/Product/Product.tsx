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

  const coffeeItem = useRecoilValue(coffeeItemState);
  const likeItem = useRecoilValue(likeItemState);
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
    setSelectedSize(price);
    setQuantity(1);
    setTotalPrice(price);
  };

  const handleCartItem = () => {
    setTotalPrice(selectedSize * quantity);
    setSelectedSize(0);
    setQuantity(0);
  };

  console.log(totalPrice, total, (total = totalPrice));

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
            <PriceText>상품 가격: {selectedSize * quantity}원</PriceText>

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
            <Buttons className="carts" onClick={handleCartItem}>
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
