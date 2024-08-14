import { Image, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = ({ onChangeText ,value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Icon name="search" size={18} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
          value={value}
            placeholderTextColor="rgba(70,70,70,0.5)"
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholder="Search" 
          />
        </View>
        <View style={styles.iconContainerEnd}>
          <Icon name="microphone" size={20} />
        </View>
      </View>
      <View style={styles.spacer} />
      <View style={styles.menuContainer}>
        <Image 
          source={require('../Assets/menu.png')} 
          tintColor={"#000"}
          style={styles.menuIcon} 
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    height: 50,
    alignSelf: 'center',
  },
  searchContainer: {
    width: '80%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(238,238,238,1)',
    borderRadius: 10,
  },
  iconContainer: {
    width: '10%',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainerEnd: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  spacer: {
    width: '5%',
  },
  menuContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(238,238,238,1)',
    borderRadius: 10,
  },
  menuIcon: {
    height: 30,
    width: 30,
  },
});
