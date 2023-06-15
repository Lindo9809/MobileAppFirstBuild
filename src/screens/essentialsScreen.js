import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
  } from "react-native";

  const essentialsScreen = ({ navigation }) => {
    return (
      <View><Text style={styles.text}>Essentials</Text>
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

  export default essentialsScreen;