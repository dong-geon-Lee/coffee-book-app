import { Button, Container, Div, Input, Label, Wrapper } from "./styles";

const Login = () => {
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
        <Button>로그인</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
