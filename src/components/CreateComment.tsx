import { useState } from "react";
import { IComment } from "../models";
import ErrorMessage from "./ErrorMessage";

interface CreateCommentProps {
    closeModal: () => void
    onCreate: (comment: IComment) => void
}

function CreateComment ({closeModal, onCreate} : CreateCommentProps) {


    const TamplateNewComment: IComment = {
        user: {
            fullName: '',
        },
        body: '',
        postId: 3,
        userId: 5,
    }

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [validName, setValidName] = useState(true)
    const [validText, setValidText] = useState(true)

    async function addComment() {
        try {
            await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(TamplateNewComment)
            });
            
        }
        catch(error: any) {
            console.log(error);
        }     
    }
    
    function handleSubmit(event: React.FormEvent) {
        setValidText(true);
        setValidName(true);
        event.preventDefault();
        TamplateNewComment.body = text;
        TamplateNewComment.user.fullName = name;
        
        if(TamplateNewComment.body.trim().length === 0) {
            setValidText(false);
        }

        if(name.length === 0) {
            setValidName(false);
        }

        if (validText && validName) {
            addComment()
            console.log(name, text, validName, validText);
            onCreate(TamplateNewComment)
        }
        
        setName('')
        setText('')
    }

    return (
        <form className="modal__form form" onSubmit={handleSubmit}>
            <button
                className="modal__quit"
                type="button"
                onClick={closeModal}>X
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
            {!validName && <ErrorMessage reason="Заполните Имя!"/>}
            {!validText && <ErrorMessage reason="Заполните коментарий!"/>}
        </form>
    );
}
 
export default CreateComment;