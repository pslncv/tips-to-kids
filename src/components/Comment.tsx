import { IComment } from "../models";

interface CommentProps {
    comment: IComment;
}

const Comment = ({comment}: CommentProps) => {
    return (
        <>
            <p>{comment.user.fullName} say:</p>
            <p>-- {comment.body}</p>
            {comment.likes && <p>{comment.likes} likes!</p>}
            <br />
            <br />
        </>
    );
}
 
export default Comment;