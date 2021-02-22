import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {styles} from '../../styles/Character';
import {useNavigation} from '@react-navigation/native';

export const Character = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detalle', {data: data.id})}>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.name}>{data?.name}</Text>
        </View>

        <View style={styles.containerImg}>
          <Image source={{uri: data.image}} style={styles.image} />
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerGray}>
            <Text style={styles.textGray}>Origin:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={styles.textBlue}>{data?.origin?.name}</Text>
          </View>
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerGray}>
            <Text style={styles.textGray}>Created:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={[styles.textBlue, styles.textMargin]}>
              {data?.created}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
