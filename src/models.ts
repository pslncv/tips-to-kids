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

export interface IComment {
    body?: string;
    id?: number;
    likes?: number;
    postId?: number;
    user: {
        id?: number
        fullName?: string;
        username?: string;
    }
}