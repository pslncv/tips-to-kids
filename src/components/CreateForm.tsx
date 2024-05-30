const CreateForm = () => {
    return (
        <form className="modal__form form" action="">
            <div className="form__title">Modal</div>
            <label className="form__label input" htmlFor="input__name">
                <span className="input__title">Name</span>
                <input type="text" className="input__name" />
            </label>
            <label className="form__label input" htmlFor="input__email">
                <span className="input__title">Email</span>
                <input type="text" className="input__email" />
            </label>
            <label className="form__label input" htmlFor="input__checkbox">
                <span className="input__title">Programmer?</span>
                <input type="checkbox" className="input__checkbox" />
            </label>
            <button type="submit">Send!</button>
        </form>
    );
}
 
export default CreateForm;