import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View ,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import useResults from "@/hooks/useResults";
import ResultList from "@/components/ResultList";


// const DATA = [
//   {
//     id: "1",
//     title: "Data Structures",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "2",
//     title: "STL",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "3",
//     title: "C++",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "4",
//     title: "Java",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "5",
//     title: "Python",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "6",
//     title: "CP",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "7",
//     title: "ReactJs",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "8",
//     title: "NodeJs",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: "9",
//     title: "MongoDb",
//     image: "https://via.placeholder.com/150",
//   },
// ];

type ItemProps = { title: string; image: string };

// const Item = ({ title, image }: ItemProps) => (
//   <View style={styles.item}>
//     <Image source={{ uri: image }} style={styles.image} />
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

const Home = () => {
  const [term, setTerm] = useState<string>("");
  const [onTermSubmitted, results] = useResults();

  const filterResultByTrending = () => {

  }
  const filterResultByPrice = () => {
    
  }

  console.log("results", results)
  
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => onTermSubmitted(term)}
        />
        <Text style={styles.currentTerm}>Current search: {results.length}</Text>
        <ResultList title='Trending'/>
        <ResultList title='Trending'/>
        <ResultList title='Trending' />


        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text> 
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  currentTerm: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
});
