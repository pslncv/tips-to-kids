export interface IProduct {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    value: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export interface IError {
    error: {
        message: string;
    }
}