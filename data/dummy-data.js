// new Product(
//   "m2",
//   ["c2"],
//   "Toast Hawaii",
//   "affordable",
//   "simple",
//   "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
//   10,
//   [
//     "1 Slice White Bread",
//     "1 Slice Ham",
//     "1 Slice Pineapple",
//     "1-2 Slices of Cheese",
//     "Butter",
//   ],
//   [
//     "Butter one side of the white bread",
//     "Layer ham, the pineapple and cheese on the white bread",
//     "Bake the toast for round about 10 minutes in the oven at 200°C",
//   ],
//   false,
//   false,
//   false,
//   false
// ),

import Category from "../models/category";
import Product from "../models/product";

export const CATEGORIES = [
  // new Category(id,description,name,color)
  new Category("1", "description1", "Beverages", "#f5428d"),
  new Category("2", "description2", "Condiments", "#f54242"),
  new Category("3", "description3", "Confections", "#f5a442"),
  new Category("4", "description4", "Dairy Products", "#f5d142"),
  new Category("5", "description5", "Grains/Cereals", "#368dff"),
  new Category("6", "description6", "Meat/Poultry", "#41d95d"),
  new Category("7", "description7", "Produce", "#9eecff"),
  new Category("8", "description8", "Seafood", "#b9ffb0"),
];

export const PRODUCTS = [
  new Product(
    "4", //id
    "2", //suplier Id
    ["3"], //category Id
    "48 - 6 oz jars", //quantityPerUnit
    "22", //unitPrice
    "https://d1e3z2jco40k3v.cloudfront.net/-/media/project/oneweb/mccormick-us/fy22-product-audit/size-alignment/00052100049694_a1c1_master.png?rev=effe4d22c4b34443b664777cdf943a4d&vd=20220422T155719Z&extension=webp&hash=B15DB35761DC3F8E82D63BCEB04E8969", //imageUrl
    53, //unitsInStock
    0, //unitsOnOrder
    0, //reorderLevel
    true, //discotinue
    "Chef Anton's Cajun Seasoning" //name
  ),
  new Product(
    "5", //id
    "2", //suplier Id
    ["2"], //category Id
    "36 boxes", //quantityPerUnit
    "21.35", //unitPrice
    "https://images.heb.com/is/image/HEBGrocery/001881366-1", //imageUrl
    0, //unitsInStock
    0, //unitsOnOrder
    0, //reorderLevel
    true, //discotinue
    "Chef Anton's Gumbo Mix" //name
  ),
  new Product(
    "6", //id
    "3", //suplier Id
    ["3", "4", "5", "6", "7", "8"], //category Id
    "12 - 8 oz jars", //quantityPerUnit
    "25", //unitPrice
    "https://hinacreates.com/wp-content/uploads/2021/06/dummy2-450x341.png", //imageUrl
    120, //unitsInStock
    0, //unitsOnOrder
    250, //reorderLevel
    false, //discotinue
    "Grandma's Boysenberry Spread" //name
  ),
  new Product(
    "7", //id
    "3", //suplier Id
    ["2"], //category Id
    "12 - 1 lb pkgs", //quantityPerUnit
    "25", //unitPrice
    "https://cdn.shopify.com/s/files/1/2114/3711/products/0005850410025_1024x1024.jpg?v=1568958512", //imageUrl
    120, //unitsInStock
    0, //unitsOnOrder
    250, //reorderLevel
    false, //discotinue
    "Uncle Bob's Organic Dried Pears" //name
  ),
  new Product(
    "8", //id
    "3", //suplier Id
    ["2"], //category Id
    "12 - 8 oz jars", //quantityPerUnit
    "25", //unitPrice
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDsXwqRY1dKomzKBD5f4PRYM33AhotlyevNZDk_Lr&s", //imageUrl
    120, //unitsInStock
    0, //unitsOnOrder
    250, //reorderLevel
    false, //discotinue
    "Northwoods Cranberry Sauce" //name
  ),
  new Product(
    "9", //id
    "3", //suplier Id
    ["4", "1", "2"], //category Id
    "12 - 8 oz jars", //quantityPerUnit
    "25", //unitPrice
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPlBp4tBOkyO5LmhapLnqi3Dex-vRAhT4b6Ljo2KidQ&s", //imageUrl
    120, //unitsInStock
    0, //unitsOnOrder
    250, //reorderLevel
    false, //discotinue
    "Mishi Kobe Niku" //name
  ),
];
