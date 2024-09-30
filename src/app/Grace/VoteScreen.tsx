// src/app/grace/VoteScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VoteScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createVote = () => {
    console.log('Vote Created:', { title, description });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Vote</Text>
      <Text>10 FAO will be deducted when voting is generated (Amount: 9 FAO)</Text>
      <TextInput
        style={styles.input}
        placeholder="Vote Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button
        title="Create Vote"
        onPress={createVote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
  },
});

export default VoteScreen;
