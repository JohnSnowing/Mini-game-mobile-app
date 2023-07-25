import React from "react";
import { Text, View } from "react-native";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
export default PrimaryButton;
