import { StyleSheet, Text, View ,Image} from 'react-native'
import icons from "@/constants/icons";
import React from 'react'

const TabIcons = ({
    icon,
    focused,
    color,
    name,
  }: {
    icon: any;
    focused: any;
    color: string;
    name: string;
  }) => {
  return (
    <View style={{alignItems:"center", justifyContent:"center",gap:5, alignContent:"center", alignSelf:"center",paddingTop:5 }}>
    <Image source={icon} resizeMode="contain" tintColor={color} />
    <Text style={{}}>{name}</Text>
  </View>
  )
}

export default TabIcons

const styles = StyleSheet.create({})