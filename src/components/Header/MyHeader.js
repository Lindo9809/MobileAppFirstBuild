import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { Header } from "react-navigation-stack";
import { styles } from './Menu.styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const MyHeader = () => {
    return (
      <Header
        placement="center"
        centerComponent={{ text: 'My Header', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
    );
  };

export default MyHeader;