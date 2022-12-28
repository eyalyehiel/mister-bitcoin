import { Component } from "react"
import { ContactList } from "../cmps/ContactList"
import { ContactFilter } from "../cmps/ContactFilter"
import { connect } from "react-redux"
import {
    loadContacts,
    removeContact,
    setFilterBy,
} from "../store/actions/contact-actions"

class _ContactView extends Component {
    async componentDidMount() {
        try {
            this.props.loadContacts()
        } catch (err) {
            console.log("err", err)
        }
    }
    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }
    onRemoveContact = async (contactId) => {
        try {
            this.props.removeContact(contactId)
            // await contactService.deleteContact(contactId)
            // this.setState(({ contacts }) => ({
            //     contacts: contacts.filter(
            //         (contact) => contact._id !== contactId
            //     ),
            // }))
        } catch (err) {
            console.log("err:", err)
        }
    }
    render() {
        const { contacts, filterBy } = this.props
        return (
            <section className="contact-view">
                <ContactFilter
                    onChangeFilter={this.onChangeFilter}
                    filterBy={filterBy}
                />
                {contacts && (
                    <ContactList
                        onRemoveContact={this.onRemoveContact}
                        contacts={contacts}
                    />
                )}
                {!contacts && <h3>Loading Contacts...</h3>}
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
}

export const ContactView = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ContactView)
