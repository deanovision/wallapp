import { useState, useEffect } from "react";
import axios from "axios";
import "./Wall.css";
import PostsList from "../../components/PostsList";
import { useAuthorizer } from "@authorizerdev/authorizer-react";
import { useNavigate } from "react-router-dom";
const Wall = () => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const { token, user, authorizerRef } = useAuthorizer();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/wall/get-posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();
    let profile = await authorizerRef.getProfile({
      Authorization: `Bearer ${token.access_token}`,
    });
    try {
      if (profile.given_name) {
        const newPosts = await axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/wall/add-post`,
          data: {
            message: post,
            user_name: profile.given_name,
          },
          headers: {
            Authorization: token.access_token,
          },
        });
        setPosts(newPosts.data);
        setPost("");
      } else {
        window.alert(
          "sorry you need to create a user name to write on the wall"
        );
        navigate("../update-profile");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <main>
      {/* only display form if user is logged in */}
      {user ? (
        <form onSubmit={submitHandler} className="form">
          <textarea
            className="block text-area"
            required
            type="text"
            name="post"
            value={post}
            placeholder="Write on the wall"
            onChange={(e) => setPost(e.target.value)}
          />
          <button className="block btn">Post to wall</button>
        </form>
      ) : null}

      <PostsList posts={posts} />
    </main>
  );
};
export default Wall;
