import { View, Text, StyleSheet } from "react-native";

function ProductDetails({
  unitPrice,
  quantityPerUnit,
  supplierId,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{unitPrice}$</Text>
      <Text style={[styles.detailItem, textStyle]}>
        quantityPerUnit:{quantityPerUnit.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        supplierId:{supplierId.toUpperCase()}
      </Text>
    </View>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
