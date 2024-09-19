import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import useResults from "@/hooks/useResults";
import ResultList from "@/components/ResultList";
import MainCard from "@/components/MainCard";
import Cost from "@/components/cost";

const Home = () => {
  const [term, setTerm] = useState<string>("");
  const [onTermSubmitted, results] = useResults();

  const filterResultbyPrice = (price: string) => {
    //price == $ || $$ ||$$$
    return results.filter((result) => {
      return result.price === price;
    });
  };

  console.log("results", results);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => onTermSubmitted(term)}
        />

        {/* <MainCard /> */}
        <ScrollView>
           <Cost title="cheap" results={filterResultbyPrice("$$")} />
          <Cost title="medium" results={filterResultbyPrice("$$")} />
          <Cost title="expensive" results={filterResultbyPrice("$$")} />
        </ScrollView>

        {/* <ResultList title="Trending" /> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  main: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "red", // Debug color for SafeAreaView,
  },

  currentTerm: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
