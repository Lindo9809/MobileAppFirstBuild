import { StyleSheet, View, Image, Button, TouchableOpacity } from 'react-native';

const header = props => {
  return (
    <View style={styles.screen}>
        <Button 
          onPress={() => props.navigation.navigate('Shop')}
          title="Shop"
       />
       <Button 
          onPress={() => props.navigation.navigate('Jordan')}
          title="Jordan"
       />
       <Button 
          onPress={() => props.navigation.navigate('Nike')}
          title="Nike"
       />
       <Button 
          onPress={() => props.navigation.navigate('Yeezy')}
          title="Yeezy"
       />
       <Button 
          onPress={() => props.navigation.navigate('Adidas')}
          title="Adidas"
       />
       <Button 
          onPress={() => props.navigation.navigate('NewBalance')}
          title="New Balance"
       />
       <Button 
          onPress={() => props.navigation.navigate('Essentials')}
          title="Essentials"
       />
       <Button 
          onPress={() => props.navigation.navigate('Supreme')}
          title="Supreme"
       />
       <Button 
          onPress={() => props.navigation.navigate('SneakerLaundry')}
          title="Sneaker Laundry"
       />
    </View>
  );
};
  
const styles = StyleSheet.create({
  screen: {
    flex: 1,
      alignItems: 'flex-start',
      backgroundColor: 'white',
      marginBottom: '100%',
      margin: 10,
    },
    button: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    Image: {
      resizeMode: 'center',
    }
  });

export default header;