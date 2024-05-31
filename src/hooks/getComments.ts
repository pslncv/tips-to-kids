import { useEffect, useState } from "react";
import { IComment } from "../models";


export function useComments() {

    const [comments, setComments] = useState<IComment[]>([])

    const getComments = async () => {    
        try {
            const response = await fetch('https://dummyjson.com/comments?limit=5');
            const data = await response.json();
            const commentsList = data.comments
            setComments(commentsList)          
        } catch (error: any) {
            console.log(error);        
        }
    }
  
    useEffect(() => {
        getComments();
    }, []);

    return {comments}
}