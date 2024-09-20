import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";

const cost = ({ title, results }: any) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Result hi {results.length}</Text> */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

export default cost;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: 18,
    // paddingHorizontal: 10, // Ensured the list is aligned
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    marginLeft:10
  },
});
