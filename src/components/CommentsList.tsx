const CommentsList = ({ children }: any) => {
    return (
        <div>
            <span style={{fontWeight: 'bold'}}>Comments</span>
            <hr />
            {children}
        </div>
    );
}
 
export default CommentsList;