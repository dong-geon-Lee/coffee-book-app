import NavMenu from "../NavMenu/NavMenu";
import { coffeeItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue } from "recoil";
import star from "../../assets/star.svg";
import star0 from "../../assets/star0.svg";
import {
  Container,
  ContentBox,
  Description,
  Img,
  ImgBox,
  ItemBox,
  Section,
  StarImg,
  Stars,
  Title,
} from "./styles";

export interface Props {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  size: string[];
  price: number[];
}

const Likes = () => {
  const coffeeItems = useRecoilValue(coffeeItemState);
  const items = coffeeItems.slice(0, 4);

  return (
    <Container>
      <Section>
        <Title>파스칼님의 [ Likes ] 목록</Title>

        {items.map((item: Props) => (
          <ItemBox key={item.id}>
            <ImgBox>
              <Img src={item.image} />
            </ImgBox>
            <ContentBox>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Stars>
                <StarImg src={star} alt="star" />
                <StarImg src={star} alt="star" />
                <StarImg src={star} alt="star" />
                <StarImg src={star} alt="star" />
                <StarImg src={star0} alt="star0" />
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
