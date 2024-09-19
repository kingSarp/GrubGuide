import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";

const cost = ({ title, results }: any) => {
  return (
    <View >
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
    title:{
        fontSize:16,
        fontWeight:"bold"
    }
});
