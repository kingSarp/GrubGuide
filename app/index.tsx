import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  
} from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Text>Onboarding Screen</Text>
        <Link href="/Home" style={{ color: "blue" }}>
        Go to tab  Screens
        </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 60,
    width: 88,
    backgroundColor: "#376AED",
    borderRadius: 8,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});
