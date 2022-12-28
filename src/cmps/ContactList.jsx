import { ContactPreview } from "./ContactPreview"

export function ContactList({ contacts,onRemoveContact }) {
    return (
        <section className="contact-list">
            {contacts &&
                contacts.map((contact) => (
                    <ContactPreview key={contact._id} onRemoveContact={onRemoveContact} contact={contact} />
                ))}
        </section>
    )
}
