import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../lib/Api";

const Login = () => {
  const [userInfo, setUserInfo] = useState();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const doLogin = (userInfo) => {
    api(`/users/login`, { ...userInfo }, "POST")
      .then((res) => {
        console.log("res = ", res);
      })
      .catch((err) => {
        console.log("CErr =", err);
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("userInfo = ", userInfo);
    doLogin(userInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <h1>로그인 페이지</h1>
      <Form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@example.com"
            name="email"
            value={userInfo?.email}
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Text className="text-muted">
            비밀번호는 외부로 유출되지 않도록 관리됩니다.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호를 입력해주세요."
            name="password"
            value={userInfo?.password}
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          제출
        </Button>
      </Form>
    </div>
  );
};

export default Login;
