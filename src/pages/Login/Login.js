import { Authorizer } from "@authorizerdev/authorizer-react";
import { useNavigate } from "react-router";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="login">
      <section className="login-header">
        <h1>Welcome to Wall App!</h1>
        <p>login to write a message</p>
      </section>
      <section>
        <Authorizer
          onLogin={(response) => {
            console.log(response);
            navigate("../wall");
          }}
        />
      </section>
    </main>
  );
};
export default Login;
