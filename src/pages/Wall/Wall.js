import { useState, useEffect } from "react";
import "./Wall.css";
const Wall = () => {
  const [post, setPost] = useState("");
  return (
    <>
      <form className="form">
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
    </>
  );
};
export default Wall;
