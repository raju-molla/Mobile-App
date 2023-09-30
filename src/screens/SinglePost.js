import React from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';

const SinglePost = ({route}) => {
  const {post} = route.params;

  const renderItem = ({item}) => <Text style={styles.postContent}>{item}</Text>;

  return (
    <View>
      <Image source={post.img} style={styles.image} />
      <Text style={styles.postTitle}>{post.title}</Text>
      <FlatList
        data={[post.content]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  postTitle: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    marginTop: 5,
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
    padding: 10,
  },
});

export default SinglePost;
