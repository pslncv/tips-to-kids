import { useState, useEffect } from 'react';
import { IProduct } from '../models';


export function useRecipes() {

    const [recipes, setRecipes] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
  
    const getProducts = async () => {
      try {
        setError('')
        setLoading(true)
        const response = await fetch('https://dummyjson.com/recipe?limit=5');
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false)
      } catch (error: any) {
        setLoading(false);
        setError(error);
      }
    }
  
    useEffect(() => {
      console.clear()
      getProducts();
    }, []);

    return {recipes, loading, error}

}