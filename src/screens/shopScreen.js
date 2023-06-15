import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
  } from "react-native";

  const shopScreen = ({ navigation }) => {
    return (
      <View><Text style={styles.text}>Shop</Text>
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

  export default shopScreen;