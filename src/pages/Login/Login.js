import { Authorizer } from "@authorizerdev/authorizer-react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="login-container">
      <div className="login">
        <section className="login-header">
          <h1>Welcome to Wall App!</h1>
          <p>login to write a message</p>
        </section>
        <section>
          <Authorizer
            onLogin={() => {
              //on successful login goto wall page
              navigate("../wall");
            }}
            onSignup={(response) => {
              //on successful signup send token and email to
              //backend to send welcome email to new user
              const { access_token, user } = response;
              axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/welcome`,
                headers: {
                  Authorization: access_token,
                },
                data: {
                  email: user.email,
                },
              })
                .then(() => {
                  //if token verified and welcome email sent navigate to wall page
                  navigate("../update-profile");
                })
                .catch((err) => console.log(err));
            }}
          />
        </section>
      </div>
    </main>
  );
};
export default Login;
