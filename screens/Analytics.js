import { useContext } from 'react';
import AnalyticsOutput from '../components/Analytics/AnalyticsOutput';
import { PostsContext } from '../store/posts-context';

const Analytics = () => {
  const postsCtx = useContext(PostsContext);

  return <AnalyticsOutput postsList={postsCtx.posts} />;
};

export default Analytics;
