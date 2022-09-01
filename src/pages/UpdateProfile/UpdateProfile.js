import { useState } from "react";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { useNavigate } from "react-router-dom";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { authorizerRef, token, user } = useAuthorizer();
  const [userName, setUserName] = useState(user.given_name || "");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    authorizerRef
      .updateProfile(
        {
          given_name: userName,
        },
        {
          Authorization: `Bearer ${token.access_token}`,
        }
      )
      .then((res) => {
        window.alert(res.message);
        setUserName("");
        navigate("../wall");
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className="profile-container">
      <section className="profile-header">
        <h1>Update Profile</h1>
        <p>You must have a user name to write on the wall</p>
        <form onSubmit={submitHandler}>
          <input
            className="update-input"
            type="text"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="update-btn">Update</button>
        </form>
      </section>
    </main>
  );
};
export default UpdateProfile;
