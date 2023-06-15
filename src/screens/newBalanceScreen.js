import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
  } from "react-native";

  const newBalanceScreen = ({ navigation }) => {
    return (
      <View><Text style={styles.text}>New Balance</Text>
        <TouchableOpacity>
            <Text> shop sneakers </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    }
  });

  export default newBalanceScreen;