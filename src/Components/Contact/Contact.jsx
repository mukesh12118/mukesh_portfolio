import "./contact.scss";

export const Contact = () => {
    return (
        <div className="contact_container">
            <h1>Get in touch</h1>

            <form>
                <div className="inp_container">
                    <label>
                        <span>Full Name</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input type="text" />
                    </label>
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
        </div>
    )
}