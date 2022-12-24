import { useRecoilValue, useSetRecoilState } from "recoil";
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

const Product = () => {
  const coffeeItem = useRecoilValue(coffeeItemState);
  const likeItem = useRecoilValue(likeItemState);
  const setLikeItem = useSetRecoilState(likeItemState);

  const { state } = useLocation();
  const { id, title, description, image, price, stars } = state.product;

  const target = coffeeItem.find((item: coffeeProps) => item.id === id);
  const activeLikes = likeItem.find(
    (item: coffeeProps) => item.id === target?.id
  );

  const handleLikes = () => {
    setLikeItem([...likeItem, { ...target, likes: !target?.likes }]);
  };

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
            <Button>Small</Button>
            <Button>Medium</Button>
            <Button>Large</Button>
          </SizeBox>

          <PriceBox>
            <PriceText>상품 가격: {price[0]}원</PriceText>

            <CountBox>
              <Buttons className="minus">-</Buttons>
              <Title>1</Title>
              <Buttons className="plus">+</Buttons>
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
            <Buttons className="carts">장바구니</Buttons>
          </BtnBox>
        </ContentBox>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Product;
