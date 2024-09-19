import React from "react";

import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const MainCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://img.freepik.com/premium-photo/restaurant-website-with-stylish-design-online-reservation-system_1314467-129.jpg?w=740", // Replace with a direct image URL
        }}
      />
      <View style={styles.distanceContainer}>
        <FontAwesome name="map-marker" size={16} color="white" />
        <Text style={styles.distanceText}>1.3 km</Text>
      </View>
      <View style={styles.cardInfo}>
        <Image
          style={styles.miniImage}
          source={{
            uri: "https://img.freepik.com/premium-photo/restaurant-website-with-stylish-design-online-reservation-system_1314467-129.jpg?w=740", // Replace with a direct image URL
          }}
        />
        <View style={styles.miniInfo}>
          <View style={styles.priceRatingContainer}>
            <Text style={styles.placeName}>Mie House</Text>
            <Text style={styles.price}>€€</Text>
            <Text style={styles.rating}>9.3/10</Text>
          </View>

          <View style={styles.locationReviewsContainer}>
            <Text style={styles.location}>Jungbusch, Mannheim</Text>
            <Text style={styles.reviews}>250 Reviews</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: width * 0.9,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 20,
  },
  cardImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  cardInfo: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-evenly",
    // backgroundColor:"red",

  },
  miniImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
  },

  miniInfo: {
    flex: 1, // This allows the miniInfo to take up remaining space
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10, // Add some space between miniImage and miniInfo
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 90,
    left: 10,


  },
  distanceText: {
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",

  },
  placeName: {
    fontSize: 18,
    fontWeight: "bold",
    // backgroundColor:"green"
    // marginTop: 5,

  },
  priceRatingContainer: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center"
    // backgroundColor:"yellow",

  },
  locationReviewsContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
    // backgroundColor:"blue",


  },
  price: {
    fontSize: 16,
    color: "grey",
    marginRight:80

  },
  rating: {
    fontSize: 16,
    color: "#4CAF50",
  },
  location: {
    marginTop: 5,
    color: "grey",
  },
  reviews: {
    color: "grey",
    marginTop: 5,
  },
});
