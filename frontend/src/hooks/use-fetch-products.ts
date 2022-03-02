import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts() {

  const url = 'http://localhost:8080/products';
  const [productsList, setProductsList] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [url]);

  const fetchProducts = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios(url);
      setProductsList(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const fetchProductsByCategory = async (category: string) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios(`http://localhost:8080/products/${category}`);
      setProductsByCategory(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

 

  return { productsList,productsByCategory, fetchProductsByCategory, isLoading, isError };


}