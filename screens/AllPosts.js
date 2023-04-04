import { useContext } from 'react';
import AllPostsOutput from '../components/AllPosts/AllPostsOutput';
import { PostsContext } from '../store/posts-context';

const AllPosts = () => {
  const postsCtx = useContext(PostsContext);

  return <AllPostsOutput postsList={postsCtx.posts} />;
};

export default AllPosts;
