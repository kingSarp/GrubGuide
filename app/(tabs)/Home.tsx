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
    // price == $ || $$ || $$$
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => onTermSubmitted(term)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainCard />
          <ResultList title="Trending"/>
          <Cost title="Medium" results={filterResultbyPrice("$$")} />
          <Cost title="Expensive" results={filterResultbyPrice("$$")} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex:   1,
  },
  main: {
    flex: 1,
    width: "100%",
    // paddingHorizontal: 15,
  },
});
