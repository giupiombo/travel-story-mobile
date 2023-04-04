import { useContext, useLayoutEffect } from 'react';
import { PostsContext } from '../store/posts-context';
import PostDetailOutput from '../components/PostDetail/PostDetailOutput';

const PostDetail = ({ route, navigation }) => {
  const postsCtx = useContext(PostsContext);

  const postId = route.params.postId;
  const selectedPost = postsCtx.posts.find((post) => post.id === postId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: selectedPost.country });
  }, [navigation]);

  return <PostDetailOutput selectedPost={selectedPost} />;
};

export default PostDetail;
