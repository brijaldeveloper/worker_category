import {StyleSheet,View} from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../Component/Header';
import CategoryList from '../Component/CategoryList';
import SearchInput from '../Component/SearchInput';
import UserList from '../Component/UserList';
import WorkerInfo from '../Data/WorkerInfo.json';
const data = [
  {
    id: 1,
    workerRole: 'Astrologer',
    icon: require('../Assets/UserImage/stars.png'),
  },
  {
    id: 2,
    workerRole: 'Assistant',
    icon: require('../Assets/UserImage/shopping.png'),
  },
  {
    id: 3,
    workerRole: 'Makeup',
    icon: require('../Assets/UserImage/makeupartist.png'),
  },
  {
    id: 4,
    workerRole: 'Mehndi',
    icon: require('../Assets/UserImage/henna.png'),
  },
  {
    id: 5,
    workerRole: 'Photographer',
    icon: require('../Assets/UserImage/photographer.png'),
  },
];

const UserInfo = (props) => {

  const [searchText, setSearchText] = useState('');
  const [selectedName, setSelectedName] = useState(data[0].workerRole);
  const [userList, setUserList] = useState(WorkerInfo[data[0].workerRole]);
  const [masterList, setMasterList] = useState(WorkerInfo[data[0].workerRole]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("tabPress", async (e) => {
      setSearchText('');
    setSelectedName(data[0].workerRole);
    setUserList(WorkerInfo[data[0].workerRole]);
    setMasterList(WorkerInfo[data[0].workerRole]);
    })

// Unsubscribe to event listener when component unmount
 return () => unsubscribe();
  }, [ props.navigation]);
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterList.filter(item => {
        const itemData = item.username ? item.username.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.includes(textData);
      });
      setUserList(newData);
    } else {
      setUserList(masterList);
    }
    setSearchText(text);
  };

  const updateCategoryValue = value => {
    setSearchText('');
    setSelectedName(value.workerRole);
    setUserList(WorkerInfo[value.workerRole]);
    setMasterList(WorkerInfo[value.workerRole]);
  };
 

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.categoryContainer}>
        <CategoryList
          categoryData={data}
          updatedValue={updateCategoryValue}
          selectedName={selectedName}
        />
      </View>
      <View style={styles.searchContainer}>
        <SearchInput
          value={searchText}
          onChangeText={text => searchFilterFunction(text)}
        />
      </View>
      <UserList data={userList} />
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    paddingBottom: 10,
  },
  searchContainer: {
    paddingVertical: 15,
  },
});
