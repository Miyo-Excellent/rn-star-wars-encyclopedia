import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { CharacterModel } from '@models/Character.model';
import { Header } from '@components/Header';
import { Card } from '@components/Card';
import { FilmModel } from '@models/Film.model';
import { SpecieModel } from '@/src/domain/models/Specie.model';

export interface CharacterViewProps {
  isLoading: boolean;
  navigation: any;
  films: FilmModel[];
  species: SpecieModel[];
  data: CharacterModel;
}

export const CharacterView = ({
  navigation,
  isLoading,
  data,
  species,
  films
}: CharacterViewProps) => (
  <ScrollView style={styles.scroll}>
    <Header image={data.image} />

    <View style={styles.title}>
      <Text style={styles.titleText}>{data.name}</Text>
    </View>

    <Text style={styles.titleText}>{`birth year: ${data.birthYear}`}</Text>

    {isLoading ? (
      <ActivityIndicator size="large" color="#00ff00" />
    ) : (
      <>
        <View style={styles.title}>
          <Text style={styles.titleText}>Films</Text>

          <ScrollView horizontal>
            {films.map((film, filmIndex) => (
              <Card
                key={`film-${film.id}:${filmIndex}`}
                data={{ uri: film.image, title: film.title, type: 'films' }}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>Species</Text>

          <ScrollView horizontal>
            {species.map((specie, specieIndex) => (
              <Card
                key={`specie-${specie.id}:${specieIndex}`}
                data={{
                  uri: specie.image,
                  title: specie.name,
                  type: 'species'
                }}
              />
            ))}
          </ScrollView>
        </View>
      </>
    )}
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
