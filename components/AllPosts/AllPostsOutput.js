import { FlatList } from 'react-native';
import PostItem from './PostItem';

function renderPostItem(itemData) {
  return <PostItem {...itemData.item} />;
}

const AllPostsOutput = ({ postsList }) => {
  return <FlatList data={postsList} renderItem={renderPostItem} />;
};

export default AllPostsOutput;
