import NavMenu from "../../components/NavMenu/NavMenu";
import { likeItemState } from "../../atoms/coffeeItemState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productProps } from "../../@types/types";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
import star0 from "../../assets/star3.svg";
import back from "../../assets/back.svg";
import heart from "../../assets/heart2.svg";
import heart4 from "../../assets/heart4.svg";
import coffee from "../../assets/coffee9.svg";
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
    const updatedLike = likeItems?.filter(
      (item: productProps) => item.id !== id
    );

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
          likeItems.map((item: productProps) => (
            <ItemBox key={item.id}>
              <ImgBox>
                <Img src={item.image} className="coffee__img" />
                <Logo
                  src={heart4}
                  className="heart"
                  onClick={() => handleLikes(Number(item.id))}
                />
              </ImgBox>
              <ContentBox>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>

                <Stars>
                  {item.stars?.map((stars) => (
                    <StarImg
                      key={Math.random() * 5}
                      src={stars === 1 ? star : star0}
                      alt="star"
                    />
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
