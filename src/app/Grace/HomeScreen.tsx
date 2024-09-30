// src/app/grace/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { type StackNavigationProp } from '@react-navigation/stack';
import { type RootStackParamList } from './types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Proxima OS</Text>
      <Text style={styles.messageHeader}>Messages</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.messageItem}>ETH - User: namulabs is fantastic company... (08:43 PM)</Text>
        <Text style={styles.messageItem}>Nvir - User: namulabs is fantastic company... (08:42 AM)</Text>
      </View>
      <Button
        title="Go to Vote"
        onPress={() => navigation.navigate('Vote')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageHeader: {
    fontSize: 20,
    marginTop: 20,
  },
  messageContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  messageItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default HomeScreen;
