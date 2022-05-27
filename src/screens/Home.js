import React, { useState } from 'react';
import { SafeAreaView, Platform, StatusBar, TextInput, FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PLANET_LIST } from "../data/PlanetList";
import Header from '../components/Header/Header';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from '../components/Text/Text';

const PlanetItem = ({ item }) => {
  const navigation = useNavigation();
  const { name, color } = item;
  return (
    <Pressable onPress={() => navigation.navigate('Details', { planet: item })} style={styles.item}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.circle, { backgroundColor: color }]}></View>
        <Text preset="h4" style={styles.itemName}>{name}</Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
}

export default function Home() {

  const [list, setList] = useState(PLANET_LIST);

  const renderItem = ({ item }) => {
    return (
      <PlanetItem item={item} />
    );
  }

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter(item => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();

      return itemName.indexOf(userTypedText) > -1;
    })
    setList(filteredList);
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.black,
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}>

      <Header />

      <TextInput
        placeholder="Type the planet name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />

      <FlatList
        data={list}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[7]
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4]
  },
  separator: {
    height: 0.5,
    marginHorizontal: spacing[5],
    backgroundColor: colors.gray,
  },
  searchInput: {
    borderBottomColor: colors.white,
    marginHorizontal: spacing[5],
    marginVertical: spacing[10],
    borderBottomWidth: 1,
    color: colors.white

  }
});