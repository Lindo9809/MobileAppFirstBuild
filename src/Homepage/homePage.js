import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    SearchBar,
    Dimensions,
    useWindowDimensions,
  } from 'react-native';
// import { header } from '../Homepage/header';
// import { Menu } from '../components/Menu/Menu';
// import { SearchBar } from '../components/SearchBar/SearchBar';
import { imageList } from '../../assets/ImageList';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const homePage = props => {
  return (
    <View style={styles.screen}>
     <ScrollView style={styles.scrollView}>
      <Image style={styles.Image} 
        source={require('../../assets/jordan4-canyon-purple.webp')}/>
        <Text style={styles.text2}>JORDAN 4 RETRO {'\n'} 'CANYON PURPLE' {'\n'}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.text1}>SHOP NOW</Text>
        </TouchableOpacity>

        <Text>{'\n'}</Text>

        <Text>{'\n'}</Text>

        <Text style={styles.text2}>SHOP ALL YOUR{'\n'} FAVOURITE BRANDS</Text>
        
        {imageList.map((image) => (  
        <Image key={image.id} source={image.url} style={styles.image1} 
        />)
      )}
       {/* <TouchableOpacity>
       <View style={styles.content}>
         <View style={styles.Line1}></View>
       </View>
        <View style={styles.content}>
          <View style={styles.Line2}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.Line3}></View>
        </View>
      </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};
                 
const styles = StyleSheet.create({
  screen: {
      alignContent: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    scrollView: {
      alignContent: 'center',
    },
    SafeAreaView: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '100%',
      minHeight: '100%',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      alignContent: 'center',
      alignItems: 'center',
    },
    Image: {
      resizeMode: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    buttonContainer: {
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      height: 30,
      padding: 8,

    },
    text1: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 10,
    },
    text2: {
      flex: 1,
      color: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
    },
    image1: {
      flex: 1,
      resizeMode: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    image2: {
      flex: 1,
      resizeMode: 'center',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image3: {
      flex: 1,
      resizeMode: 'center',
      borderWidth: 1,
      alignItems: 'flex-end',
      justifyContent: 'space-around',
    }
  });

  export default homePage;