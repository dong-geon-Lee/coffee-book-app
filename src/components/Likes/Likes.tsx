import NavMenu from "../NavMenu/NavMenu";
import { coffeeItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";
import star from "../../assets/star.svg";
import star0 from "../../assets/star0.svg";
import back from "../../assets/back.svg";
import heart from "../../assets/heart2.svg";
import {
  Container,
  ContentBox,
  Description,
  Header,
  Img,
  ImgBox,
  ItemBox,
  Logo,
  Section,
  StarImg,
  Stars,
  Title,
} from "./styles";
import { Link } from "react-router-dom";

export interface Props {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
  stars: any;
}

const Likes = () => {
  const coffeeItems = useRecoilValue(coffeeItemState);
  const items = coffeeItems.slice(0, 12);

  return (
    <Container>
      <Section>
        <Header>
          <Link to="/home">
            <Logo src={back} alt="logo" />
          </Link>
          <Title>좋아요</Title>
          <Logo src={heart} alt="logo" className="logo" />
        </Header>

        {items.map((item: Props) => (
          <ItemBox key={item.id}>
            <ImgBox>
              <Img src={item.image} />
            </ImgBox>
            <ContentBox>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>

              <Stars>
                {item.stars.map((stars: any) => (
                  <StarImg src={stars === 1 ? star : star0} alt="star" />
                ))}
              </Stars>
            </ContentBox>
          </ItemBox>
        ))}
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Likes;
