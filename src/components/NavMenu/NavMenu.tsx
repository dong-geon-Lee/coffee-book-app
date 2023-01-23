import { useNavigate } from "react-router-dom";
import { Container, IconsText, Img, ImgBox, MenuIcons } from "./styles";
import { useRecoilValue } from "recoil";
import { currentItemState } from "../../recoils/coffeeItemState";
import { useCallback } from "react";
import {
  ROUTE__CARTITEMS,
  ROUTE__HOME,
  ROUTE__LIKES,
  ROUTE__PROFILES,
} from "../../constants/constants";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";

const NavMenu = () => {
  const { homeStatus, likeStatus, cartStatus, profileStatus } =
    useRecoilValue(currentItemState);

  const navigate = useNavigate();
  const homeItemStatus = homeStatus ? homeStatus.length : 0;
  const likeItemStatus = likeStatus ? likeStatus.length : 0;
  const cartItemStatus = cartStatus ? cartStatus.length : 0;
  const profileItemStatus = profileStatus ? profileStatus.length : 0;

  const handleNavigate = useCallback(
    (destination: string) => {
      navigate(`/${destination}`);
    },
    [navigate]
  );

  return (
    <Container>
      <MenuIcons>
        <ImgBox
          className="icon__box"
          onClick={() => handleNavigate(ROUTE__HOME)}
        >
          <Img src={home} className="icons" />
          <IconsText>{homeItemStatus}</IconsText>
        </ImgBox>
        <ImgBox
          className="icon__box"
          onClick={() => handleNavigate(ROUTE__LIKES)}
        >
          <Img src={heart} className="icons" />
          <IconsText>{likeItemStatus}</IconsText>
        </ImgBox>
        <ImgBox
          className="icon__box"
          onClick={() => handleNavigate(ROUTE__CARTITEMS)}
        >
          <Img src={cart} className="icons" />
          <IconsText>{cartItemStatus}</IconsText>
        </ImgBox>
        <ImgBox
          className="icon__box"
          onClick={() => handleNavigate(ROUTE__PROFILES)}
        >
          <Img src={profile} className="icons" />
          <IconsText>{profileItemStatus}</IconsText>
        </ImgBox>
      </MenuIcons>
    </Container>
  );
};

export default NavMenu;
