import { useNavigate } from "react-router-dom";
import { Container, IconsText, Img, ImgBox, MenuIcons } from "./styles";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import {
  likeItemState,
  recordedCartItemState,
} from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";

const NavMenu = () => {
  const navigate = useNavigate();
  const likeItems = useRecoilValue(likeItemState);
  const cartItems = useRecoilValue(recordedCartItemState);

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
        </ImgBox>
      </MenuIcons>
    </Container>
  );
};

export default NavMenu;
