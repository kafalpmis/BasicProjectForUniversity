//Categories will render as a GRİD

import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoriesGridTile({ name, description, color, onPress }) {
  return (
    //Outer Container
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
  //will apply Outer View
  gridItem: {
    //for every grid Item
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    //shadow
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  //Pressable doenst take any space and that lead to undesired view
  //to get rid of this problem bellow which applied to Pressable component
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  innerContainer: {
    flex: 1, //takes all the available space inside outer view
    padding: 16,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: 5,
    fontSize: 9,
  },
});
