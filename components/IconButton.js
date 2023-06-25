import { Pressable, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      // When pressed turn true, my opacity style will apply
      style={({ pressed }) => pressed && styles.pressed}
    >
      {/* icon, text içinde olmak zorundaymış diye error aldım, so text içine koydum */}
      <Text>
        <Ionicons name={icon} size={24} color={color} />;
      </Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
