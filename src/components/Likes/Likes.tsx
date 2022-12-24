import NavMenu from "../NavMenu/NavMenu";
import { coffeeProps, likeItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import star from "../../assets/star.svg";
import star0 from "../../assets/star3.svg";
import back from "../../assets/back.svg";
import heart from "../../assets/heart2.svg";
import heart4 from "../../assets/heart4.svg";
import coffee from "../../assets/coffee9.svg";
import { Link } from "react-router-dom";
import {
  Background,
  Container,
  ContentBox,
  Description,
  EmptyBox,
  Header,
  Img,
  ImgBox,
  ItemBox,
  Logo,
  Section,
  StarImg,
  Stars,
  Text,
  Title,
} from "./styles";

const Likes = () => {
  const likeItems = useRecoilValue(likeItemState);
  const setLikeItems = useSetRecoilState(likeItemState);

  const handleLikes = (id: number) => {
    const updatedLike = likeItems.filter((item: any) => item.id !== id);
    setLikeItems(updatedLike);
  };

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

        {likeItems.length === 0 && (
          <EmptyBox>
            <Background img={coffee}></Background>
            <Text>There is no Likes Coffee.</Text>
          </EmptyBox>
        )}

        {likeItems.length >= 1 &&
          likeItems.map((item: coffeeProps) => (
            <ItemBox key={item.id}>
              <ImgBox>
                <Img src={item.image} className="coffee__img" />
                <Logo
                  src={heart4}
                  className="heart"
                  onClick={() => handleLikes(item.id)}
                />
              </ImgBox>
              <ContentBox>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>

                <Stars>
                  {item.stars.map((stars) => (
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
