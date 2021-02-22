import React from 'react';
import {Text, View} from 'react-native';

export const Character = ({data}) => {
  return (
    <>
      <Text>{data.id}</Text>
    </>
  );
};
