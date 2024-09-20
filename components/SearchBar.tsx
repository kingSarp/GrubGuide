import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";

interface SearchBarProps {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBar}>
      <Image source={icons.search} style={styles.icon} tintColor={"green"} />
      <TextInput
        style={styles.input}
        placeholder="Explore Restaurants"
        placeholderTextColor="#999"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      {term.length > 0 && (
        <TouchableOpacity onPress={() => onTermChange("")} style={styles.clearButton}>
          <Image source={icons.plus} style={styles.clearIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 25,
    elevation: 3,
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    position: "absolute",
    left: 70,
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  clearButton: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
  },
  clearIcon: {
    width: 16,
    height: 16,
    tintColor: "gray",
  },
});
