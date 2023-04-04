import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

const PostItem = ({ id, image, title, name }) => {
  const navigation = useNavigation();

  const itemSelectionHandler = () => {
    navigation.navigate('PostDetail', { postId: id });
  };

  return (
    <Pressable style={styles.container} onPress={itemSelectionHandler}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>by: {name}</Text>
      </View>
    </Pressable>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    borderColor: '#F7C59F',
    backgroundColor: '#F7C59F',
    borderRadius: 12,
    borderWidth: 2,
    marginHorizontal: 12,
    marginTop: 12,
    padding: 12,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
  },
  author: {
    marginTop: 4,
    fontStyle: 'italic',
    fontSize: 12,
    letterSpacing: 2,
  },
});
