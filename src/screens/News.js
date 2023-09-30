import React from 'react';
import {View, Text, FlatList, StyleSheet, Button, Image} from 'react-native';

const data = [
  {
    id: '1',
    img: require('../assets/banner/4.jpeg'),
    title: 'পোস্ট নিক্সন চৌধুরী',
    content: `সাবেক সংসদ সদস্য ও আওয়ামী লীগের সভাপতিমণ্ডলীর সদস্য কাজী জাফরউল্লাহকে উদ্দেশ্য করে ফরিদপুর-৪ (ভাঙ্গা, চরভদ্রাসন, সদরপুর) আসনের সংসদ সদস্য মজিবুর রহমান চৌধুরী ওরফে নিক্সন চৌধুরী বলেছেন, আমি করোনার সময় পরিবারের কথা চিন্তা না করে জনগণের পাশে ছিলাম, আর আপনি তো করোনার সময় দুই বৎসর ঘরের মধ্যে লুকিয়ে ছিলেন। জনগণকে কিভাবে ভালোবাসতে হয়, সেবা করতে হয় তা আপনার জানা নেই। আপনি পাকিস্তানের সেনাবাহিনীদের খাদ্য সাপ্লাই দিয়েছেন। আপনার সেই খাদ্য খেয়ে পাকিস্তানিরা আমার মা-বোনদের ইজ্জত নিয়েছে।
আপনি তো বড় রাজাকার ছিলেন।
আজ বুধবার বিকেলে ভাঙ্গা উপজেলার কালামৃধা ইউনিয়নের দেওড়া বাজার মাঠ প্রাঙ্গণে এক জনসভায় প্রধান অতিথির বক্তব্যে তিনি এসব কথা বলেন।

নিক্সন বলেন, জাফরউল্লাহ সাহেব আপনি নৌকা নৌকা করেন, নৌকা কি প্রধানমন্ত্রী শেখ হাসিনা আপনাকে দিয়েছেন। আপনাকে এখনও নৌকা দেন নাই।
আপনি তো বড় রাজাকার ছিলেন।
আজ বুধবার বিকেলে ভাঙ্গা উপজেলার কালামৃধা ইউনিয়নের দেওড়া বাজার মাঠ প্রাঙ্গণে এক জনসভায় প্রধান অতিথির বক্তব্যে তিনি এসব কথা বলেন।

নিক্সন বলেন, জাফরউল্লাহ সাহেব আপনি নৌকা নৌকা করেন, নৌকা কি প্রধানমন্ত্রী শেখ হাসিনা আপনাকে দিয়েছেন। আপনাকে এখনও নৌকা দেন নাই।আপনি তো বড় রাজাকার ছিলেন।
আজ বুধবার বিকেলে ভাঙ্গা উপজেলার কালামৃধা ইউনিয়নের দেওড়া বাজার মাঠ প্রাঙ্গণে এক জনসভায় প্রধান অতিথির বক্তব্যে তিনি এসব কথা বলেন।

নিক্সন বলেন, জাফরউল্লাহ সাহেব আপনি নৌকা নৌকা করেন, নৌকা কি প্রধানমন্ত্রী শেখ হাসিনা আপনাকে দিয়েছেন। আপনাকে এখনও নৌকা দেন নাই।আপনি তো বড় রাজাকার ছিলেন।
আজ বুধবার বিকেলে ভাঙ্গা উপজেলার কালামৃধা ইউনিয়নের দেওড়া বাজার মাঠ প্রাঙ্গণে এক জনসভায় প্রধান অতিথির বক্তব্যে তিনি এসব কথা বলেন।

নিক্সন বলেন, জাফরউল্লাহ সাহেব আপনি নৌকা নৌকা করেন, নৌকা কি প্রধানমন্ত্রী শেখ হাসিনা আপনাকে দিয়েছেন। আপনাকে এখনও নৌকা দেন নাই।
    `,
  },
  {
    id: '2',
    img: require('../assets/banner/6.jpeg'),
    title: 'Post 2',
    content: 'This is the content of Post 2.',
  },
  {
    id: '3',
    img: require('../assets/banner/4.jpeg'),
    title: 'Post 2',
    content: 'This is the content of Post 2.',
  },
  // Add more data items here...
];

const NewsItem = ({item, navigation}) => {
  const content = item.content.slice(0, 50);
  return (
    <View style={styles.postContainer}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent}>{content}</Text>
      <Button
        onPress={() => navigation.navigate('Post', {post: item})}
        title="See full post"
      />
    </View>
  );
};

const News = ({navigation}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <NewsItem item={item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    marginTop: 10,
    // fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    marginTop: 5,
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default News;
