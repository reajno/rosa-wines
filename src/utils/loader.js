import { redirect } from "react-router-dom";
import products from "../MOCK_DATA.json";

const loader = ({ params }) => {
  if (params.slug) {
    const product = products.find((item) => item.slug === params.slug);

    if (!product) {
      throw redirect("/not-found");
    }
    return product;
  }

  if (params.type) {
    const productList = products.find((item) => item.type === params.type);

    if (!productList) {
      throw redirect("/not-found");
    }
    return productList;
  }
};

export default loader;
