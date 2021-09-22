import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Moment from 'react-moment';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.time}>
            <Moment format="hh:mm:ss" interval={1000} />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
      },
      time: {
        color: '83d38d',
        textShadowColor: '#00ff00',
        fontSize: 70,
        textShadowOffset: {
          width: 0,
          height: 0
        },
        textShadowRadius: 5
      }
});
