import { createContext, useEffect, useState } from 'react';
import { fetchPost } from '../util/http';

export const PostsContext = createContext({
  posts: [],
  addPost: ({ id, image, title, text, country, name }) => {},
});

function PostsContextProvider({ children }) {
  const [postsList, setPostsList] = useState();

  useEffect(() => {
    async function getPosts() {
      try {
        const posts = await fetchPost();
        setPostsList(posts);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  function addPost(post) {
    setPostsList((currentPosts) => [...currentPosts, post]);
  }

  const value = {
    posts: postsList,
    addPost: addPost,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

export default PostsContextProvider;
