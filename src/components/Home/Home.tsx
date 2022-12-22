import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState } from "../../atoms/userAuthState";
import img from "../../assets/logo5.png";
import logo6 from "../../assets/coffee6.svg";
import logo7 from "../../assets/coffee7.svg";
import logo3 from "../../assets/coffee3.svg";
import logo4 from "../../assets/coffee4.svg";
import home from "../../assets/home.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout2.svg";
import { coffeeItemState } from "../../atoms/coffeeItemState";
import {
  Button,
  Container,
  Div,
  Header,
  Img,
  ImgBox,
  Input,
  Label,
  Logo,
  Section,
  Wrapper,
  Title,
  ContentBox,
  Contents,
  MenuIcons,
  Text,
} from "./styles";
import { useEffect } from "react";

export interface Props {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
}

const Home = () => {
  const [authActive, setAuthActive] = useRecoilState(authActiveState);
  const coffeeLists = useRecoilValue(coffeeItemState);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(coffeeLists);

  const handleLogout = () => {
    navigate("/login");
    setAuthActive(false);
  };

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

  console.log(location.pathname, "현재 pass");

  useEffect(() => {
    setAuthActive(true);
  }, [location.pathname === "/home"]);

  useEffect(() => {
    if (!authActive) {
      return navigate("/login");
    }
  }, [authActive]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <ImgBox>
            <Img src={img} alt="logo" />
          </ImgBox>

          <Text>메인페이지</Text>

          <Button onClick={handleLogout}>
            <ImgBox className="logout">
              <Img src={logout} />
            </ImgBox>
          </Button>
        </Header>

        <Section>
          <Div className="main">
            <Div className="flex">
              <Logo src={logo3} className="logo__svg" />
              <Label htmlFor="espresso">에스프레소</Label>
              <Input type="checkbox" id="espresso" name="espresso" />
            </Div>
            <Div className="flex">
              <Logo src={logo7} />
              <Label htmlFor="cold__brew">콜드 브루</Label>
              <Input type="checkbox" id="cold__brew" name="cold__brew" />
            </Div>
            <Div className="flex">
              <Logo src={logo4} />
              <Label htmlFor="frappuccino">푸라푸치노</Label>
              <Input type="checkbox" id="frappuccino" name="frappuccino" />
            </Div>
            <Div className="flex">
              <Logo src={logo6} />
              <Label htmlFor="blended">블렌디드</Label>
              <Input type="checkbox" id="blended" name="blended" />
            </Div>
          </Div>

          <ContentBox>
            {coffeeLists.map((item: Props) => (
              <Contents key={item.id}>
                <ImgBox className="content">
                  <Img src={item.image} alt="logo" />
                </ImgBox>

                <Title>{item.title}</Title>
              </Contents>
            ))}
          </ContentBox>
        </Section>
      </Wrapper>

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

export default Home;
