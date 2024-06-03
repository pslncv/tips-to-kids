import { useEffect, useState } from "react";
import { IComment } from "../models";


export function useComments() {

    const [comments, setComments] = useState<IComment[]>([])
    const [commentsLoad, setCommentsLoad] = useState(false)
    const [commentsError, setCommentsError] = useState('')

    const getComments = async () => {    
        try {
            setCommentsError('')
            setCommentsLoad(true)
            const response = await fetch('https://dummyjson.com/comments?limit=3');
            const data = await response.json();
            const commentsList = data.comments
            setComments(commentsList)          
            setCommentsLoad(false)
        } catch (error: any) {
            setCommentsLoad(false)
            setCommentsError(error);
        }
    }
  
    useEffect(() => {
        getComments();
    }, []);

    return {comments, commentsLoad, commentsError}
}