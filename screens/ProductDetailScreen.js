import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/IconButton";

import List from "../components/ProductDetail/List";
import Subtitle from "../components/ProductDetail/Subtitle";
// import ProductDetails from "../components/ProductDetails";
import { PRODUCTS } from "../data/dummy-data";

function ProductDetailScreen({ route, navigation }) {
  //getting productId props via route
  const productId = route.params.productId;

  const selectedProduct = PRODUCTS.find((product) => product.id == productId);

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootComponent}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Text style={styles.name}>{selectedProduct.name}</Text>
      {/* <ProductDetails
        unitPrice={selectedProduct.unitPrice}
        quantityPerUnit={selectedProduct.quantityPerUnit}
        supplierId={selectedProduct.supplierId}
        textStyle={styles.detailText}
      /> */}
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Product All Details</Subtitle>
          <List data={selectedProduct.ingredients} />
          {/* <Subtitle>Steps</Subtitle>
          <List data={selectedProduct.steps} /> */}
        </View>
      </View>
    </ScrollView>
  );
}
export default ProductDetailScreen;

const styles = StyleSheet.create({
  rootComponent: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
