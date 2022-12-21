import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authActiveState } from "../../atoms/userAuthState";
import { accounts } from "../../data/userItems";
import { Button, Container, Div, Form, Input, Label } from "./styles";

interface userProps {
  target: { name: string; value: string };
}

interface inputProps {
  userId: string;
  password: string;
}

interface accProps {
  name: string;
  userId: string;
  password: string | number;
  money: number;
  createdDate: object;
}

const Login = () => {
  const [authInput, setAuthInput] = useState({
    userId: "",
    password: "",
  });
  const { userId, password }: inputProps = authInput;
  const [, setAuthActive] = useRecoilState(authActiveState);
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
      (account: accProps) =>
        account.userId === userId && account.password === +password
    );

    if (checkAuth) {
      setAuthActive(true);
      navigate("/");
    } else {
      setAuthActive(false);
    }
  };

  //! 로그인 절차를 수행하기 위한 절차
  //* 1. 더미데이터를 가져온다.
  //* 1-1. 입력 받을 인풋 2개를 작성한다.
  //* 2. 고차함수를 이용해서 비교하는 함수를 작성한다.
  //* 3. handleAuth 함수에 로직을 넣는다.
  //* 4. 클릭이 되면 '/' 으로 이동한다.
  //* 5. 나가기가 계속 표시되자 않게끔 useLocation 이용하기

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
