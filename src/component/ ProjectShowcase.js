import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const ProjectShowcase = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://thediplomat.com/wp-content/uploads/2022/07/sizes/td-story-s-2/thediplomat_2022-07-01-034812.jpg',
        }}
        style={styles.projectImage}
      />
      <Text style={styles.projectTitle}>আমার অসাধারণ প্রকল্প</Text>
      <Text style={styles.projectDescription}>
        যখনই আমরা যে পরিকল্পনা নেব, এটা মাথায় রাখতে হবে যে, আজ থেকে বিশ বছর পর
        কতটা উন্নতি হতে পারে, জনসংখ্যা কতটা হবে এবং কী হতে পারে। অর্থনৈতিক
        কর্মকাণ্ড বাড়বে, সে কথা মাথায় রেখেই কিন্তু আমাদের পরিকল্পনা নেওয়া উচিৎ।"
        - মাননীয় প্রধানমন্ত্রী শেখ হাসিনা
      </Text>
      {/* Add more project details here */}
      <Image
        source={{
          uri: 'https://thediplomat.com/wp-content/uploads/2022/07/sizes/td-story-s-2/thediplomat_2022-07-01-034812.jpg',
        }}
        style={styles.projectImage}
      />
      <Text style={styles.projectTitle}>আমার অসাধারণ প্রকল্প</Text>
      <Text style={styles.projectDescription}>
        যখনই আমরা যে পরিকল্পনা নেব, এটা মাথায় রাখতে হবে যে, আজ থেকে বিশ বছর পর
        কতটা উন্নতি হতে পারে, জনসংখ্যা কতটা হবে এবং কী হতে পারে। অর্থনৈতিক
        কর্মকাণ্ড বাড়বে, সে কথা মাথায় রেখেই কিন্তু আমাদের পরিকল্পনা নেওয়া উচিৎ।"
        - মাননীয় প্রধানমন্ত্রী শেখ হাসিনা
      </Text>
      <Image
        source={{
          uri: 'https://thediplomat.com/wp-content/uploads/2022/07/sizes/td-story-s-2/thediplomat_2022-07-01-034812.jpg',
        }}
        style={styles.projectImage}
      />
      <Text style={styles.projectTitle}>আমার অসাধারণ প্রকল্প</Text>
      <Text style={styles.projectDescription}>
        যখনই আমরা যে পরিকল্পনা নেব, এটা মাথায় রাখতে হবে যে, আজ থেকে বিশ বছর পর
        কতটা উন্নতি হতে পারে, জনসংখ্যা কতটা হবে এবং কী হতে পারে। অর্থনৈতিক
        কর্মকাণ্ড বাড়বে, সে কথা মাথায় রেখেই কিন্তু আমাদের পরিকল্পনা নেওয়া উচিৎ।"
        - মাননীয় প্রধানমন্ত্রী শেখ হাসিনা
      </Text>
      <Image
        source={{
          uri: 'https://thediplomat.com/wp-content/uploads/2022/07/sizes/td-story-s-2/thediplomat_2022-07-01-034812.jpg',
        }}
        style={styles.projectImage}
      />
      <Text style={styles.projectTitle}>আমার অসাধারণ প্রকল্প</Text>
      <Text style={styles.projectDescription}>
        This is a description of my project. It does amazing things and is built
        using React Native.
      </Text>
      <Image
        source={{
          uri: 'https://thediplomat.com/wp-content/uploads/2022/07/sizes/td-story-s-2/thediplomat_2022-07-01-034812.jpg',
        }}
        style={styles.projectImage}
      />
      <Text style={styles.projectTitle}>আমার অসাধারণ প্রকল্প</Text>
      <Text style={styles.projectDescription}>
        যখনই আমরা যে পরিকল্পনা নেব, এটা মাথায় রাখতে হবে যে, আজ থেকে বিশ বছর পর
        কতটা উন্নতি হতে পারে, জনসংখ্যা কতটা হবে এবং কী হতে পারে। অর্থনৈতিক
        কর্মকাণ্ড বাড়বে, সে কথা মাথায় রেখেই কিন্তু আমাদের পরিকল্পনা নেওয়া উচিৎ।"
        - মাননীয় প্রধানমন্ত্রী শেখ হাসিনা
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  projectImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  projectDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    color: 'gray',
  },
});

export default ProjectShowcase;
