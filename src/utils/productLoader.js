import { redirect } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";

const productLoader = async ({ params }) => {
  const { data: products } = await supabase.from("products").select("*");

  if (params.slug) {
    const product = products.find((item) => item.slug === params.slug);

    if (!product) {
      throw redirect("/not-found");
    }
    return product;
  }

  if (params.type) {
    const productList = products.find((item) => item.type === params.type);

    if (productList.length === 0) {
      throw redirect("/not-found");
    }
    return productList;
  }

  return null;
};

export default productLoader;
