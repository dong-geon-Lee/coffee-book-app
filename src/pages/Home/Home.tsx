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
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState } from "../../recoils/userAuthState";
import { ButtonProps, productProps } from "../../@types/types";
import { Link } from "react-router-dom";
import {
  checkedMenuState,
  currentItemState,
} from "../../recoils/coffeeItemState";
import {
  ROUTE__CARTITEMS,
  ROUTE__HOME,
  ROUTE__LIKES,
  ROUTE__PROFILES,
} from "../../constants/constants";
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
  IconsText,
} from "./styles";

const Home = () => {
  const [authActive, setAuthActive] = useRecoilState(authActiveState);
  const [checkedMenu, setCheckedMenu] = useRecoilState(checkedMenuState);
  const { espresso, coldbrew, frappuccino, blended } = checkedMenu;

  const { homeStatus, likeStatus, cartStatus, profileStatus } =
    useRecoilValue(currentItemState);

  const navigate = useNavigate();
  const location = useLocation();

  const homeItemStatus = homeStatus ? homeStatus.length : 0;
  const likeItemStatus = likeStatus ? likeStatus.length : 0;
  const cartItemStatus = cartStatus ? cartStatus.length : 0;
  const profileItemStatus = profileStatus ? profileStatus.length : 0;

  const onChange = useCallback(
    (e: ButtonProps) => {
      setCheckedMenu({
        ...checkedMenu,
        [e.target.name]: e.target.checked,
      });
    },
    [checkedMenu, setCheckedMenu]
  );

  const handleNavigate = useCallback(
    (destination: string) => {
      if (destination === "login") setAuthActive(false);
      navigate(`/${destination}`);
    },
    [navigate, setAuthActive]
  );

  useEffect(() => {
    setAuthActive(true);
  }, [location.pathname === "/home"]);

  useEffect(() => {
    if (!authActive) {
      navigate("/login");
    }
  }, [authActive, navigate]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <ImgBox>
            <Img src={img} alt="logo" />
          </ImgBox>

          <Text>메인페이지</Text>

          <Button onClick={() => handleNavigate("login")}>
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
              <Input
                type="checkbox"
                id="espresso"
                name="espresso"
                checked={espresso}
                onChange={onChange}
              />
            </Div>
            <Div className="flex">
              <Logo src={logo7} />
              <Label htmlFor="coldbrew">콜드 브루</Label>
              <Input
                type="checkbox"
                id="coldbrew"
                name="coldbrew"
                checked={coldbrew}
                onChange={onChange}
              />
            </Div>
            <Div className="flex">
              <Logo src={logo4} />
              <Label htmlFor="frappuccino">푸라푸치노</Label>
              <Input
                type="checkbox"
                id="frappuccino"
                name="frappuccino"
                checked={frappuccino}
                onChange={onChange}
              />
            </Div>
            <Div className="flex">
              <Logo src={logo6} />
              <Label htmlFor="blended">블렌디드</Label>
              <Input
                type="checkbox"
                id="blended"
                name="blended"
                checked={blended}
                onChange={onChange}
              />
            </Div>
          </Div>

          <ContentBox>
            {homeStatus.map((item: productProps) => (
              <Contents key={item.id}>
                <Link to={`/home/${item.id}`} state={{ product: item }}>
                  <ImgBox className="content">
                    <Img src={item.image} alt="logo" />
                  </ImgBox>
                </Link>

                <Title>{item.title}</Title>
              </Contents>
            ))}
          </ContentBox>
        </Section>
      </Wrapper>

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

export default Home;
