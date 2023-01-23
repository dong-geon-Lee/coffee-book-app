import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Container, Div, Form, GuestBox, Input, Label } from "./styles";
import { userProps } from "../../@types/types";
import { checkAuthUser } from "../../helpers/helpers";
import {
  accountListState,
  authActiveState,
  authUserState,
} from "../../recoils/userAuthState";
import {
  EMPTY__INPUT__MESSAGE,
  ERROR__INPUT__MESSAGE,
  RANDOM__GUEST__ACCOUNT,
} from "../../constants/constants";

const Login = () => {
  const accountLists = useRecoilValue(accountListState);
  const [, setAuthActive] = useRecoilState(authActiveState);
  const [, setAuthUser] = useRecoilState(authUserState);

  const [authInput, setAuthInput] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = authInput;
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e: userProps) => {
    setAuthInput({
      ...authInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!userId || !password) {
      alert(EMPTY__INPUT__MESSAGE);
      return;
    }

    const checkAuth = checkAuthUser(accountLists, userId, password);

    if (!checkAuth) {
      setAuthActive(false);
      alert(ERROR__INPUT__MESSAGE);
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
    setAuthInput({ userId, password: String(password) });
  };

  useEffect(() => {
    if (location.pathname === "/login") setAuthActive(false);
  }, [location.pathname]);

  return (
    <Container>
      <GuestBox>
        <Button className="guest__btn" onClick={randomGuest}>
          {RANDOM__GUEST__ACCOUNT}
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
