import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ResultListProps } from "@/types/resultList";


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  type ItemProps = {title: string};


  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>

     
    </View>
  );
  

const ResultList: React.FC<ResultListProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
 
});
