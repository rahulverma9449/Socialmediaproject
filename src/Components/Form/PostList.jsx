import { useContext } from "react"; // Import React
import { PostList as PostListData } from "../../Store/post-list-store"; // Import PostList context
import Post from "./Post"; // Import Post component

const PostList = () => {
  const { postList } = useContext(PostListData); // Destructure postList from context

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList; // Export PostList component
