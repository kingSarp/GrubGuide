import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React from "react";
import { ButtonProps } from "@/types/Button";

const Button: React.FC<ButtonProps> = ({
  style,
  imageSource,
  handlePress,
  // textStyles,
  // isLoading,
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={handlePress}>
      {/* <Image source={imageSource} /> */}
      <Image source={imageSource} />
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
