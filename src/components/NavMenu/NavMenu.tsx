import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState } from "../../atoms/loginState";
import {
  Button,
  Container,
  Header,
  Img,
  ImgBox,
  Wrapper,
  MenuIcons,
} from "./styles";
import img from "../../assets/logo5.png";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import { dataState } from "../../atoms/dataState";

interface Props {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
}

const NavMenu = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
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
      {/* <Wrapper>
        <Header>
          <ImgBox>
            <Img src={img} alt="logo" />
          </ImgBox>

          <Button onClick={handleLogout}>🔙</Button>
        </Header>
      </Wrapper> */}

      <MenuIcons>
        <ImgBox className="icon__box" onClick={handleNavigateHome}>
          <Img src={home} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateLikes}>
          <Img src={heart} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateCartItems}>
          <Img src={cart} className="icons" />
        </ImgBox>
        <ImgBox className="icon__box" onClick={handleNavigateProfiles}>
          <Img src={profile} className="icons" />
        </ImgBox>
      </MenuIcons>
    </Container>
  );
};

export default NavMenu;
