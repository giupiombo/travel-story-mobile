import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const PostDetailOutput = ({ selectedPost }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectedPost.title}</Text>
      <Text style={styles.author}>Published by: {selectedPost.name}</Text>
      <Text style={styles.author}>at {selectedPost.date}</Text>
      <Image style={styles.image} source={{ uri: selectedPost.image }} />
      <Text style={styles.country}>{selectedPost.country}</Text>
      <Text style={styles.text}>{selectedPost.text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  title: {
    paddingVertical: 8,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  author: {
    paddingBottom: 8,
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 2,
  },
  image: {
    height: 300,
    width: '100%',
  },
  country: {
    paddingVertical: 8,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#FF6B35',
    letterSpacing: 2,
  },
  text: {
    fontSize: 16,
  },
});

export default PostDetailOutput;
