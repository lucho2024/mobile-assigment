import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {styles} from '../styles/CharacterId';

export const Character = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: data?.image}} style={styles.image} />

      <View style={styles.bottom}>
        <View style={styles.containerText}>
          <Text style={styles.name}>{data?.name}</Text>
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
            <Text style={styles.textGray}>Status:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={styles.textBlue}>{data?.status}</Text>
          </View>
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerGray}>
            <Text style={styles.textGray}>Species:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={styles.textBlue}>{data?.species}</Text>
          </View>
        </View>
        <View style={styles.containerText}>
          <View style={styles.containerGray}>
            <Text style={styles.textGray}>Gender:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={styles.textBlue}>{data?.gender}</Text>
          </View>
        </View>

        <View style={styles.containerText}>
          <View style={styles.containerGray}>
            <Text style={styles.textGray}>Created:</Text>
          </View>
          <View style={styles.containerBlue}>
            <Text style={styles.textBlue}>{data?.created}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
