import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VehicleModel } from '@models/Vehicle.model';
import { Header } from '@components/Header';

export interface VehicleViewProps {
  navigation: any;
  data: VehicleModel;
}

export const VehicleView = ({ navigation, data }: VehicleViewProps) => (
  <ScrollView style={styles.scroll}>
    <Header image={data.image} />

    <View style={styles.title}>
      <Text style={styles.titleText}>{data.name}</Text>
    </View>
  </ScrollView>
);

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 1)',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 10,
    paddingBottom: 10
  },
  titleText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: 'rgba(255, 255, 255, 1)'
  }
});
