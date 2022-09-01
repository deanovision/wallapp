import Loading from "./Loading";
import { formatDistanceToNow } from "date-fns";
const PostsList = ({ posts }) => {
  return posts ? (
    <section className="posts">
      {posts.map((post) => {
        return (
          <div className="paper" key={post.id}>
            <div className="username">{post.user_name}</div>
            <div className="message">{post.message}</div>
            <div>
              {/* format timestamp to show a time relative to now */}
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
              })}
            </div>
          </div>
        );
      })}
    </section>
  ) : (
    <Loading />
  );
};
export default PostsList;
