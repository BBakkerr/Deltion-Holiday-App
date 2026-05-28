import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import InfoBlock from '../components/InfoBlock';
import { getHolidayData } from '../api/holidayApi';

export default function CountdownScreen() {

  useEffect(() => {

    async function loadData() {

      const data = await getHolidayData();

      console.log(data);

    }

    loadData();

  }, []);

  return (
    <View>
      <Text>Countdown Screen</Text>
      <InfoBlock />
    </View>
  );
}