import { useState, useEffect } from 'react';
import { IProduct } from '../models';


export function useRecipes() {

    const [recipes, setRecipes] = useState<IProduct[]>([]);
    const [recipesLoad, setRecipesIsLoad] = useState(false);
    const [recipesError, setRecipesError] = useState('')
  
    const getProducts = async () => {
        try {
            setRecipesError('')
            setRecipesIsLoad(true)
            const response = await fetch('https://dummyjson.com/recipe?limit=2');
            const data = await response.json();        
            setRecipes(data.recipes);
            setRecipesIsLoad(false)
        } catch (error: any) {
            setRecipesIsLoad(false);
            setRecipesError(error);
        }
    }
  
    useEffect(() => {
      getProducts();
    }, []);

    return {recipes, recipesLoad, recipesError}

}