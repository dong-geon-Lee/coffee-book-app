import NavMenu from "../../components/NavMenu/NavMenu";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import { productProps } from "../../@types/types";
import { Link } from "react-router-dom";
import { removeLikeItem } from "../../helpers/helpers";
import { NOT__LIKE__COFFEE } from "../../constants/constants";
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
  const authUser = useRecoilValue(authUserState);
  const { likeLists } = useRecoilValue(authUserState);
  const setUserLikeLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);

  const handleLikes = (id: number): void => {
    const newLikesItems = removeLikeItem(likeLists, id);

    setUserLikeLists({ ...authUser, likeLists: newLikesItems });
    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return { ...authUser, likeLists: newLikesItems };
        }

        return { ...user };
      });
    });
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

        {likeLists?.length >= 1 ? (
          likeLists.map((item: productProps) => (
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
                  {item.stars?.map((stars, index) => (
                    <StarImg
                      key={index}
                      src={stars === 1 ? star : star0}
                      alt="star"
                    />
                  ))}
                </Stars>
              </ContentBox>
            </ItemBox>
          ))
        ) : (
          <EmptyBox>
            <Background img={coffee}></Background>
            <Text>{NOT__LIKE__COFFEE}</Text>
          </EmptyBox>
        )}
      </Section>
      <NavMenu />
    </Container>
  );
};

export default Likes;
