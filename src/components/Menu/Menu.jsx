import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { Header } from "react-navigation-stack";
import { styles } from './Menu.styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';

const Menu = () => {
   return (
    <View style={styles.MenuHeader}>
      <TouchableOpacity>
        <View style={styles.content}>
          <Feather name='menu' size={25} color='black' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
        <Image style={styles.image1} 
        source={require('../../../assets/CourtOrder.webp')}
        />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.content}>
          <SimpleLineIcons name='user' size={25} color='black' />
        </View>
      </TouchableOpacity>
    </View>
)};

export default Menu;