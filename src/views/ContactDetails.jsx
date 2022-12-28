import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { TransferFund } from "../cmps/TransferFund"
import { contactService } from "../services/contact-service"
import { signUp,transferCoins} from '../store/actions/user-actions'

class _ContactDetails extends Component {
    state = {
        contact: null,
    }
    componentDidMount() {
        this.loadContact()
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(
            this.props.match.params.id
        )
        this.setState({ contact })
    }
    render() {
        const { contact } = this.state
        const { loggedInUser, transferCoins} =this.props
        return (
            <section className="contact-details">
                {contact && (
                    <section className="contact-info">
                        <h3>{contact.name}</h3>
                        <h3>{contact.phone}</h3>
                        <h3>{contact.email}</h3>
                        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
                    </section>
                )}
                {!contact && <h3>No Selected Contact</h3>}
                <TransferFund transferCoins={transferCoins} loggedInUser={loggedInUser} contact={contact} />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userModule.loggedInUser,
})

const mapDispatchToProps = {
    signUp,
    transferCoins
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)