import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { styles } from './SearchBar.styles';
import { Feather } from 'react-icons/fi';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Search = () => {
    return (
        <View style={styles.Bar}>
            <Octicons name="search" size={25} color="black" />
            <TextInput style={styles.InputStyle} placeholder="Search"/>
        </View>
    );
};

export default Search;