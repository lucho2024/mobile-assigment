import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import Api from '../../../utils/api';
import {Character} from './Character';

export const ListCharacter = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    const res = await Api.getCharacters();
    setData(res?.results);
  };

  const keyExtractor = (item) => {
    return item.item.id.toString();
  };
  const renderEmpty = () => (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#46B9E9" />
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        horizontal={true}
        initialNumToRender={3}
        renderItem={({item}) => <Character />}
        ListEmptyComponent={() => renderEmpty()}
        extraData={refresh}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fecthData} />
        }
        keyExtractor={keyExtractor}
      />
    </>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
