import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const WorkerProfile = ({worker}) => {
  return (
    <View style={{margin: 7}}>
      <ImageBackground
        imageStyle={styles.avatarImageStyle}
        style={styles.avatar}
        source={{uri: worker.avatar}}>
        <Image source={{uri: worker.country_flag}} style={styles.flag} />
      </ImageBackground>
      <Text style={styles.username}>{worker.username}</Text>
    </View>
  );
};

const UserList = ({data}) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({item}) => <WorkerProfile worker={item} />}
      numColumns={4}
      columnWrapperStyle={{}}
    />
  );
};

export default UserList;
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  workerContainer: {
    margin: 7,
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  avatarImageStyle: {
    borderRadius: 100,
  },
  flag: {
    height: 25,
    width: 25,
    borderRadius: 50,
    alignSelf: 'flex-end',
    left: -3,
  },
  username: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
});
