import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  authActiveState,
  authProps,
  authUserState,
} from "../../atoms/userAuthState";
import { accounts } from "../../data/userItems";
import { Button, Container, Div, Form, Input, Label } from "./styles";

interface Props {
  setAuthUser: () => void;
}

interface userProps {
  target: { name: string; value: string };
}

interface inputProps {
  userId: string;
  password: string;
}

const Login = () => {
  const [authInput, setAuthInput] = useState({
    userId: "",
    password: "",
  });
  const { userId, password }: inputProps = authInput;
  const [, setAuthActive] = useRecoilState(authActiveState);
  const [, setAuthUser] = useRecoilState(authUserState);

  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e: userProps) => {
    setAuthInput({
      ...authInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const checkAuth = accounts.find(
      (account: authProps) =>
        account.userId === userId && account.password === +password
    );

    if (!checkAuth) {
      setAuthActive(false);
      return;
    }

    setAuthUser(checkAuth);
    setAuthActive(true);
    navigate("/home");
  };

  console.log(accounts);

  useEffect(() => {
    if (location.pathname === "/login") setAuthActive(false);
  }, [location.pathname]);

  return (
    <Container>
      <Form onSubmit={handleAuth}>
        <Div>
          <Label>아이디</Label>
          <Input
            type="text"
            placeholder="게스트 아이디를 입력하세요"
            onChange={onChange}
            value={userId}
            name="userId"
          />
        </Div>
        <Div>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="게스트 비밀번호를 입력하세요"
            onChange={onChange}
            value={password}
            name="password"
          />
        </Div>
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  );
};

export default Login;
