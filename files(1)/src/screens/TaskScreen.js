import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import PushNotification from 'react-native-push-notification';

const TaskScreen = ({ navigation }) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/tasks', {
        destination,
        date,
        time
      });

      // Schedule a notification
      PushNotification.localNotificationSchedule({
        message: `Reminder: You need to reach ${destination} by ${time} on ${date}`,
        date: new Date(Date.now() + 5 * 1000) // Schedule for 5 seconds later for testing
      });

      navigation.navigate('Map', { destination });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Set Your Task</Text>
      <TextInput
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default TaskScreen;