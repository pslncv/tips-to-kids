import { useState } from "react";
import { IComment } from "../models";
import ErrorMessage from "./ErrorMessage";

function CreateComment (props: any) {

    const newComment: IComment = {
        body: '',
        postId: 3,
        userId: 5,
    }

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [validText, setValidText] = useState(true)

    async function addComment() {
        try {
            const response = await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            })
            console.log(response.json());
        }
        catch(error: any) {
            console.log(error);
        }     
    }
    
    function handleSubmit(event: React.FormEvent) {
        setValidText(true);
        event.preventDefault();        
        newComment.body = text;
        
        if(newComment.body.trim().length === 0) {
            setValidText(false);
        }

        if (validText) addComment()
        
        setName('')
        setText('')
    }

    return (
        <form className="modal__form form" onSubmit={handleSubmit}>
            <button
                className="modal__quit"
                type="button"
                onClick={props.switch}>X
            </button>
            <div className="form__label">
                <label
                    className="input__title"
                    htmlFor="input__name">Full Name
                </label>
                <input
                    id="input__name"
                    className="input"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />
            </div>
            <div className="form__label">
                <label
                    className="input__title"
                    htmlFor="input__email">Text
                </label>
                <textarea
                    id="input__text"
                    className="input"
                    value={text}
                    onChange={event => setText(event.target.value)}
                    />
            </div>
            <button
                className="form__submit"
                type="submit">Send!
            </button>
            {!validText && <ErrorMessage reason="Заполните коментарий!"/>}
        </form>
    );
}
 
export default CreateComment;