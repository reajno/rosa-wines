import { useState, useEffect } from "react";

const useProduct = () => {
  const [products, setProducts] = useState(() => {
    const cache = sessionStorage.getItem("products");
    return cache ? JSON.parse(cache) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.products);
        sessionStorage.setItem("products", JSON.stringify(data.products));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [products]);

  return { products, loading, error };
};

export default useProduct;
