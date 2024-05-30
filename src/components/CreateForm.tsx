const CreateForm = (props: any) => {

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
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
                    htmlFor="input__name">Name
                </label>
                <input
                    id="input__name"
                    className="input"
                    type="text"
                />
            </div>
            <div className="form__label">
                <label
                    className="input__title"
                    htmlFor="input__email">E-mail
                </label>
                <input
                    id="input__email"
                    className="input"
                    type="text"
                />
            </div>
            <div className="form__label">
                <label
                    className="input__title"
                    htmlFor="input__checkbox">Programmer?
                </label>
                <input
                    id="input__checkbox"
                    className="input"
                    type="checkbox"
                />
            </div>
            <button className="form__submit" type="submit">Send!</button>
        </form>
    );
}
 
export default CreateForm;