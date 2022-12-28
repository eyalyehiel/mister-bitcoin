import { Component,createRef } from "react"
import { Link } from "react-router-dom"

export class ContactFilter extends Component {
    state = {
        filterBy: null
    }
    typeInputRef = createRef()
    
    componentDidMount() {
        const { filterBy } = this.props
        this.setState({ filterBy: { ...filterBy } })
    }

    handleRef = (elInput) => {
        elInput?.focus()
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(
            prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onChangeFilter({ ...this.state.filterBy })
        )

    }
    render() {
        const { filterBy } = this.state
        if (!filterBy) return <div>Loading...</div>
        const { name } = filterBy
        return (
        <section className="contact-filter">
            <input ref={this.handleRef} onChange={this.handleChange} value={name} placeholder="Search contacts" type="search" name="name" id="name" />
            <Link to="/contact/edit"><img src={require('../assets/imgs/add-contact.png')} alt="" /></Link>
        </section>
        )
    }
}
