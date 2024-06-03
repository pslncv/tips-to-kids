interface ErrorProps {
    reason: string
}

const ErrorMessage = ({reason}: ErrorProps) => {
    return (
        <p className="error" style={{textAlign: 'center'}}>{reason}</p>
    );
}
 
export default ErrorMessage;