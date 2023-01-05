import { FloatingLabel, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <Form>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Form>
  );
};

export default Signup;
