import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import ProductDetails from "./ProductDetails";

function ProductItem({
  id,
  name,
  imageUrl,
  unitPrice,
  quantityPerUnit,
  supplierId,
}) {
  const navigation = useNavigation();

  function selectProductItemHandler() {
    navigation.navigate("ProductDetail", {
      //sending ProductId param with that second parameter which is object
      productId: id,
    });
  }

  return (
    <View style={styles.productItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectProductItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
            <Text style={styles.name}>{name}</Text>
          </View>
          <ProductDetails
            unitPrice={unitPrice}
            supplierId={supplierId}
            quantityPerUnit={quantityPerUnit}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  productItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",

    //shadow
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
