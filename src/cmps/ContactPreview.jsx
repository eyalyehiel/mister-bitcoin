import { Link } from "react-router-dom"

export function ContactPreview({ contact, onRemoveContact }) {
    return (
        <section className="contact-preview">
            <Link to={`/contact/${contact._id}`}>
                <h3>{contact.name}</h3>
            </Link>
            <button onClick={() => onRemoveContact(contact._id)}>
                <img
                    src={require("../assets/imgs/remove-contact.png")}
                    alt=""
                />
            </button>
        </section>
    )
}
