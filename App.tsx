import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import shopScreen from './src/screens/shopScreen';
import jordanScreen from './src/screens/jordanScreen';
import nikeScreen from './src/screens/nikeScreen';
import yeezyScreen from './src/screens/yeezyScreen';
import adidasScreen from './src/screens/adidasScreen';
import newBalanceScreen from './src/screens/newBalanceScreen';
import essentialsScreen from './src/screens/essentialsScreen';
import supremeScreen from './src/screens/supremeScreen';
import sneakerLaundryScreen from './src/screens/sneakerLaundryScreen';
import shopStreetwear from './src/screens/shopStreetwear';
import homePage from './src/Homepage/homePage';
import header from './src/Homepage/header';
import Menu from './src/components/Menu/Menu';
import Search from './src/components/SearchBar/SearchBar';
import MyHeader from './src/components/Header/MyHeader';

const navigator = createStackNavigator(
  {
    Home: homePage,
    Shop: shopScreen,
    Jordan: jordanScreen,
    Nike: nikeScreen,
    Yeezy: yeezyScreen,
    Adidas: adidasScreen,
    NewBalance: newBalanceScreen,
    Essentials: essentialsScreen,
    Supreme: supremeScreen,
    SneakerLaundry: sneakerLaundryScreen,
    Streetwear: shopStreetwear,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home'
    },
  }
);  

export default createAppContainer(navigator);
