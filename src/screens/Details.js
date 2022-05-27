import React from 'react';
import { Linking, SafeAreaView, FlatList, Platform, StatusBar, ScrollView, View, Image, StyleSheet, Pressable } from 'react-native';
import Header from '../components/Header/Header';
import { MercurySvg, EarthSvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../components/Text/Text';

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: 'uppercase' }}>{title}</Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
}

export default function Details({ route }) {
  const { planet } = route.params;
  const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;
  const renderImage = () => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />
      case 'earth':
        return <EarthSvg />
      case 'jupiter':
        return <JupiterSvg />
      case 'mars':
        return <MarsSvg />
      case 'neptune':
        return <NeptuneSvg />
      case 'saturn':
        return <SaturnSvg />
      case 'uranus':
        return <UranusSvg />
      case 'venus':
        return <VenusSvg />
    }
  }

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>
          {renderImage()}
        </View>
        <View style={styles.detailView}>
          <Text preset="h1" style={styles.name}>{name}</Text>
          <Text preset="h4" style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text preset="h4">Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>Wikipedia</Text>
          </Pressable>
        </View>

        <View style={{ height: 40 }} />

        <PlanetSection title="Rotation Time" value={revolutionTime} />
        <PlanetSection title="Revolution Time" value={revolutionTime} />
        <PlanetSection title="Radius" value={radius} />
        <PlanetSection title="Average Temp." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  imageView: {
    padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  description: {
    textAlign: 'justify',
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.darkGrey,
    borderWidth: 0.5,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    marginHorizontal: spacing[6],
    marginBottom: spacing[10]
  }
});