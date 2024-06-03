import { useState } from "react";

const CreateForm = (props: any) => {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        setName('');
        setText('');
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
                type="submit">Send!</button>
        </form>
    );
}
 
export default CreateForm;