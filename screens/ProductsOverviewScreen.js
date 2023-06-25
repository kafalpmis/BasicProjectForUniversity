import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ProductItem from "../components/ProductItem";
import { PRODUCTS, CATEGORIES } from "../data/dummy-data";

//route param instead of navigation param
function ProductsOverviewScreen({ route, navigation }) {
  //extracts from categoriesScreen
  // catId == pressed Category
  const catId = route.params.categoryId;

  //keep and drop Product via filter funciton
  const displayedProducts = PRODUCTS.filter((productItem) => {
    return productItem.categoryIds.indexOf(catId) >= 0; //-1 demek arrayde yok demek
  });

  useLayoutEffect(() => {
    //We got the title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).name;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderProductItem(itemData) {
    const item = itemData.item;
    const productItemProps = {
      id: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      supplierId: item.supplierId,
      quantityPerUnit: item.quantityPerUnit,
      unitPrice: item.unitPrice,
    };
    return <ProductItem {...productItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      ></FlatList>
    </View>
  );
}
export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
