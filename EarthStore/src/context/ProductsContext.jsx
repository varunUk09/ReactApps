import React, { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext({
  products: [],
  loading: true,
  error: null,
});

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching products...");
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        console.log("Products fetched:", json);
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return <ProductsContext.Provider value={{ products, loading, error }}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const context = useContext(ProductsContext);
  console.log("useProducts context:", context);
  return context;
}