import { useContext } from 'react';
import NewPostOutput from '../components/NewPost/NewPostOutput';
import { storePost } from '../util/http';
import { PostsContext } from '../store/posts-context';

const NewPost = ({ navigation }) => {
  const postsCtx = useContext(PostsContext);

  const onSubmitHandler = (postData) => {
    async function submit(postData) {
      try {
        const id = await storePost(postData);
        postsCtx.addPost(postData);
        navigation.goBack();
      } catch (error) {
        console.log('err: ' + error);
      }
    }

    submit(postData);
  };

  const onCancelHandler = () => {
    navigation.goBack();
  };

  return (
    <NewPostOutput onSubmit={onSubmitHandler} onCancel={onCancelHandler} />
  );
};

export default NewPost;
