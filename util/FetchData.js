import axios from "axios";

const BACKEND_URL2 = "https://react-cross-app-default-rtdb.firebsaseio.com";

const BACKEND_URL = "https://northwind.vercel.app/api/products";

export async function FetchData() {
  const response = await axios.get(BACKEND_URL);

  const products = [];

  for (const key in response.data) {
    const productsObj = {
      id: key,
      description: response.data[key].description,
    };
    products.push(productsObj);
  }

  return (
    <View>
      {products.data.map((item) => {
        // <Text>{item}</Text>;
        console.log({ item });
      })}
    </View>
  );
}
