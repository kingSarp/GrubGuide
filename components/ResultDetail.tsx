import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultDetail = ({ result }: any) => {
  return (
    <View style={styles.main}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
    main:{
        marginLeft:10
    },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
