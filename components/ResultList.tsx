import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ResultListProps } from "@/types/resultList";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d79",
    title: "Fouth  Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ResultList: React.FC<ResultListProps> = ({ title }) => {
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.showAllTitle}>show all</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10, // Added padding to align text
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  showAllTitle: {
    fontSize: 16,
    color: "#4CAF50", // Green to highlight clickable action
  },
  item: {
    backgroundColor: "#F9C2FF",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 8, // Rounded corners for list items
  },
});
