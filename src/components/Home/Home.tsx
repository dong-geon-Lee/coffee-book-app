import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authActiveState } from "../../atoms/LoginState";
import { Container } from "./styles";

const Home = () => {
  const [, setAuthActive] = useRecoilState(authActiveState);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setAuthActive(false);
  };

  return (
    <Container>
      <h1>Home 컴포넌트로 진입</h1>
      <button onClick={handleLogout}>
        <h1>로그아웃</h1>
      </button>
    </Container>
  );
};

export default Home;
