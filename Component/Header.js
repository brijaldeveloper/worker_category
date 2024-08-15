import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
   return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Icon name="menu-sharp" size={25} color={'#000'} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../Assets/FlagImage/logo.png')}
        />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="notifications-outline" size={25} color={'#000'} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
   
   marginTop:DeviceInfo.hasNotch()? 25:5,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
  },
  iconContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '70%',
    justifyContent: 'center',
  
  },
  logo: {
    height: 60,
    width: 100,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  carouselImage: {
    height: 300,
    width: 100,
  },
});
