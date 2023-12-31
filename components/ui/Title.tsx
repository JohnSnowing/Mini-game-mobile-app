import React from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = {
  children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
