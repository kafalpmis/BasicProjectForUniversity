// id,
// categoryIds,
// title,
// affordability,
// complexity,
// imageUrl,
// duration,
// ingredients,
// steps,
// isGlutenFree,
// isVegan,
// isVegetarian,
// isLactoseFree
class Product {
  constructor(
    id,
    supplierId, //affordability
    categoryIds,
    quantityPerUnit, //complexity
    unitPrice, //Duration
    imageUrl,
    unitsInStock,
    unitsOnOrder,
    reorderLevel,
    discontinued,
    name,
    ingredients
  ) {
    this.id = id;
    this.supplierId = supplierId;
    this.categoryIds = categoryIds;
    this.quantityPerUnit = quantityPerUnit;
    this.unitPrice = unitPrice;
    this.imageUrl = imageUrl;
    this.unitsInStock = unitsInStock;
    this.unitsOnOrder = unitsOnOrder;
    this.reorderLevel = reorderLevel;
    this.discontinued = discontinued;
    this.name = name;
    this.ingredients = [
      (id = `id : ${id}`),
      (supplierId = `supplierId : ${supplierId}`),
      (categoryIds = `categoryIds : ${categoryIds}`),
      (quantityPerUnit = `quantityPerUnit : ${quantityPerUnit}`),
      (unitPrice = `unitPrice : ${unitPrice}`),
      // (imageUrl = `imageUrl : ${imageUrl}`),
      (unitsInStock = `unitsInStock : ${unitsInStock}`),
      (unitsOnOrder = `unitsOnOrder : ${unitsOnOrder}`),
      (reorderLevel = `reorderLevel : ${reorderLevel}`),
      (discontinued = `discontinued : ${discontinued}`),
      (name = `name : ${name}`),
    ];
  }
}

export default Product;
