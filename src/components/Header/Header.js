import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Text from '../Text/Text';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export default function FoodHeader({ backBtn }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn &&
        <Pressable style={{ marginRight: spacing[4] }} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      }
      <Text preset="h2">THE PLANETS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4
  }
})