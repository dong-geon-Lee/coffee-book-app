import back from "../../assets/back.svg";
import coffee8 from "../../assets/coffee8.svg";
import star from "../../assets/star.svg";
import star0 from "../../assets/star3.svg";
import NavMenu from "../../components/NavMenu/NavMenu";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { itemOptionProps } from "../../@types/types";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import {
  coffeeItemState,
  quantityState,
  totalPriceState,
  selectedSizeState,
  recordedQtyState,
} from "../../recoils/coffeeItemState";
import {
  addCartItems,
  addLikeProduct,
  findSameProduct,
  formattedNumber,
  selectProductSize,
} from "../../helpers/helpers";
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

const Product = () => {
  const [selectedSize, setSelectedSize] = useRecoilState(selectedSizeState);
  const [quantity, setQuantity] = useRecoilState(quantityState);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setRecordedQty] = useRecoilState(recordedQtyState);

  const coffeeItem = useRecoilValue(coffeeItemState);
  const authUser = useRecoilValue(authUserState);

  const setUserLikeLists = useSetRecoilState(authUserState);
  const setUserCartLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);

  const { state } = useLocation();
  const { id, title, description, image, stars, product } =
    state && state.product;

  const selectedSizeIndex = selectProductSize(product, selectedSize);
  const targetItems = findSameProduct(coffeeItem, id);
  const activeLikes = addLikeProduct(authUser.likeLists, targetItems);

  const handleLikes = () => {
    setUserLikeLists({
      ...authUser,
      likeLists: [
        ...authUser.likeLists,
        { ...targetItems, likes: !targetItems?.likes },
      ],
    });

    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return {
            ...user,
            likeLists: [
              ...authUser.likeLists,
              { ...targetItems, likes: !targetItems?.likes },
            ],
          };
        }
        return { ...user };
      });
    });
  };

  const handlePlusClick = () => {
    if (quantity > 8) return;
    setQuantity((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    if (quantity < 2) return;
    setQuantity((prevState) => prevState - 1);
  };

  const handleResetMenu = (price: number) => {
    setQuantity(1);
    setSelectedSize(price);
    setTotalPrice(price);
  };

  const likeBtnDisabled = !!activeLikes?.likes;
  const cartBtnDisabled = !(selectedSizeIndex + 1);
  const cartItems = addCartItems(
    product,
    image,
    title,
    quantity,
    totalPrice,
    authUser,
    selectedSize
  );

  const handleCartItem = () => {
    setTotalPrice(selectedSize * quantity);
    setRecordedQty(quantity);
    setUserCartLists({
      ...authUser,
      cartLists: [...authUser.cartLists, cartItems],
    });

    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return {
            ...authUser,
            cartLists: [...authUser.cartLists, cartItems],
          };
        }

        return { ...user };
      });
    });

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

          <Title>???????????????</Title>
          <Logo src={coffee8} alt="logo" className="logo" />
        </Header>

        <ImgBox>
          <Img src={image} />
        </ImgBox>

        <ContentBox>
          <Contents>
            <Title className="content__title">{title}</Title>
            <LogoBox>
              {stars.map((stars: number, index: string) => (
                <Logo
                  key={index}
                  src={stars === 1 ? star : star0}
                  alt="star"
                  className="stars"
                />
              ))}
            </LogoBox>
          </Contents>
          <Description>{description}</Description>

          <SizeBox>
            {product.map((item: itemOptionProps) => (
              <Div key={item.id}>
                <Button
                  onClick={() => handleResetMenu(Number(item.price))}
                  active={item.id === selectedSizeIndex + 1}
                >
                  {item.size}
                </Button>
              </Div>
            ))}
          </SizeBox>

          <PriceBox>
            <PriceText>
              ?????? ??????:{formattedNumber(selectedSize * quantity)}???
            </PriceText>

            <CountBox>
              <Buttons
                className="minus"
                onClick={handleMinusClick}
                disabled={cartBtnDisabled}
              >
                -
              </Buttons>
              <Title className="quantity">{quantity}</Title>
              <Buttons
                className="plus"
                onClick={handlePlusClick}
                disabled={cartBtnDisabled}
              >
                +
              </Buttons>
            </CountBox>
          </PriceBox>

          <BtnBox>
            <Buttons
              className="likes"
              onClick={handleLikes}
              disabled={likeBtnDisabled}
            >
              ?????????
            </Buttons>
            <Buttons
              className="carts"
              onClick={handleCartItem}
              disabled={cartBtnDisabled}
            >
              ????????????
            </Buttons>
          </BtnBox>
        </ContentBox>
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Product;
