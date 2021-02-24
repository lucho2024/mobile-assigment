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
  const [id, setId] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 34;

  useEffect(() => {
    fecthData();
  }, []);

  useEffect(() => {
    fecthData();
  }, [page]);

  const fecthData = async () => {
    const res = await Api.getCharacters(page);
    const {results} = res;
    data.length > 0 ? setData([...data, ...results]) : setData(results);
  };

  const keyExtractor = (item) => {
    return item.id.toString();
  };
  const renderEmpty = () => (
    <View style={styles.containerLoading}>
      <ActivityIndicator size="large" color="#46B9E9" />
    </View>
  );

  const endReached = () => {
    page <= limit ? setPage(page + 1) : null;
  };
  return (
    <>
      {console.log(data)}
      <FlatList
        data={data}
        initialNumToRender={3}
        onEndReached={endReached}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => <Character data={item} />}
        ListEmptyComponent={() => renderEmpty()}
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
