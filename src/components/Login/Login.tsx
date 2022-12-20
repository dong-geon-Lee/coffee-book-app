import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState } from "../../atoms/loginState";
import { Button, Container, Div, Input, Label, Wrapper } from "./styles";

const Login = () => {
  const [, setAuthActive] = useRecoilState(authActiveState);
  const navigate = useNavigate();

  const handleAuth = () => {
    setAuthActive((prevState) => !prevState);
    navigate("home");
  };

  return (
    <Container>
      <Wrapper>
        <Div>
          <Label>아이디</Label>
          <Input type="text" />
        </Div>
        <Div>
          <Label>비밀번호</Label>
          <Input type="password" />
        </Div>
        <Button onClick={() => handleAuth()}>로그인</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
