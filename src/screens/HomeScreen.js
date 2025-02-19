import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to OnTimeApp!</Text>
      <Button
        title="Set a Task"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  );
};

export default HomeScreen;