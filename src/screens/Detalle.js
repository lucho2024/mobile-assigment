import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Api from '../../utils/api';
import {Character} from '../components/Character';

export const Detalle = ({route}) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    fecthData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fecthData = async () => {
    const res = await Api.getCharacterId(route.params.data);

    setdata(res);
  };

  return (
    <>
      {Object.entries(data).length > 0 ? (
        <Character data={data} />
      ) : (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#46B9E9" />
        </View>
      )}
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
