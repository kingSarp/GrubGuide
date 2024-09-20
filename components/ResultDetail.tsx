import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultDetail = ({ result }: any) => {
  return (
    <View style={styles.main}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text  style={styles.details}>
        {result.rating} stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;

const styles = StyleSheet.create({
    main:{
        marginLeft:15  ,
      },
  image: {
    width: 200, 
    height: 150,
    borderRadius: 12, 
    marginBottom: 10, // Space between image and text

  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 4, // Space between name and details
  },
  details: {
    fontSize: 13,
    color: "grey", // Softer color for details text
  },
});
