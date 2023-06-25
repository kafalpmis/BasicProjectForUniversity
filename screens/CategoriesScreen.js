import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  //this is just a helper function to make my codes leaner and easy to read
  function renderCategoryItem(itemData) {
    //itemData provided by FlatList (keep in mind)
    function pressHandler() {
      navigation.navigate("ProductsOverview", {
        //bastığım category'nin ID'sini yolluyorum ProductsOverview'a
        //passing unique ID of Category though that"categoryId" param to ProductsOverviewScreen
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoriesGridTile
        name={itemData.item.name}
        description={itemData.item.description}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    //thanks to flatlist it is scrollable
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}

export default CategoriesScreen;
