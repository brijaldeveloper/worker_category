import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const CategoryList = ({ updatedValue, selectedName,categoryData }) => {


  const renderItem = ({ item }) => (
    <View
      style={[
        styles.itemContainer,
        item.workerRole === selectedName && styles.selectedItemContainer,
      ]}
    >
      <TouchableOpacity onPress={() => updatedValue(item)} style={styles.iconContainer}>
        <Image style={styles.icon} source={item.icon} />
      </TouchableOpacity>
      <Text style={styles.workerRoleText}>{item.workerRole}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(236,229,221)',
    paddingTop: 20,
    borderRadius: 5,
  },
  itemContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  selectedItemContainer: {
    backgroundColor: 'rgb(219,216,212)',
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 100,
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 100,
    resizeMode: 'contain',
  },
  workerRoleText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
});
