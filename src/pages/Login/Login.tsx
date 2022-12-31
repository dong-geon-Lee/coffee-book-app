import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Container, Div, Form, GuestBox, Input, Label } from "./styles";
import { authProps, userProps, inputProps } from "../../@types/types";
import {
  accountListState,
  authActiveState,
  authUserState,
} from "../../atoms/userAuthState";

const Login = () => {
  const accountLists = useRecoilValue(accountListState);
  const [, setAuthActive] = useRecoilState(authActiveState);
  const [, setAuthUser] = useRecoilState(authUserState);

  const [authInput, setAuthInput] = useState({
    userId: "",
    password: "",
  });

  const { userId, password }: inputProps = authInput;

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

    if (!userId || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요");
      return;
    }

    const guestBtn = "";

    const checkAuth = accountLists.find(
      (account: authProps) =>
        account.userId === userId && account.password === +password
    );

    if (!checkAuth) {
      setAuthActive(false);
      alert("아이디 또는 비밀번호가 일치하지 않습니다");
      return;
    } else {
      setAuthUser(checkAuth);
      setAuthActive(true);
      navigate("/home");
    }
  };

  const randomGuest = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const { userId, password } = accountLists[randomIndex];

    setAuthInput({ userId, password });
  };

  useEffect(() => {
    if (location.pathname === "/login") setAuthActive(false);
  }, [location.pathname]);

  return (
    <Container>
      <GuestBox>
        <Button className="guest__btn" onClick={() => randomGuest()}>
          랜덤 게스트 계정
        </Button>
      </GuestBox>

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
