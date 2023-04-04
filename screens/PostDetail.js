import { useContext } from 'react';
import { Text } from 'react-native';
import { PostsContext } from '../store/posts-context';

const PostDetail = ({ route }) => {
  const postsCtx = useContext(PostsContext);

  const postId = route.params.postId;
  // const selectedPost = MEALS.find((meal) => meal.id === mealId);

  return <Text>Post Detail page</Text>;
};

export default PostDetail;
