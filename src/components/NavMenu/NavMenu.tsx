import { useNavigate } from "react-router-dom";
import { Container, IconsText, Img, ImgBox, MenuIcons } from "./styles";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../atoms/userAuthState";
import { paymentProps } from "../../@types/types";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import {
  likeItemState,
  paymentDetailState,
  recordedCartItemState,
} from "../../atoms/coffeeItemState";

const NavMenu = () => {
  const likeItems = useRecoilValue(likeItemState);
  const cartItems = useRecoilValue(recordedCartItemState);
  const paymentItems = useRecoilValue(paymentDetailState);
  const authUser = useRecoilValue(authUserState);
  const detailItems = paymentItems.filter(
    (item: paymentProps) => item.orderUser === authUser.userId
  );

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleNavigateLikes = () => {
    navigate("/likes");
  };

  const handleNavigateCartItems = () => {
    navigate("/cartItems");
  };

  const handleNavigateProfiles = () => {
    navigate("/profiles");
  };

  return (
    <Container>
      <MenuIcons>
        <ImgBox className="icon__box" onClick={handleNavigateHome}>
          <Img src={home} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateLikes}>
          <Img src={heart} className="icons" />
          <IconsText>{likeItems.length || 0}</IconsText>
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateCartItems}>
          <Img src={cart} className="icons" />
          <IconsText>{cartItems.length || 0}</IconsText>
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateProfiles}>
          <Img src={profile} className="icons" />
          <IconsText>{detailItems.length || 0}</IconsText>
        </ImgBox>
      </MenuIcons>
    </Container>
  );
};

export default NavMenu;
