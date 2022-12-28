import { Component } from "react"

export class TransferFund extends Component {
    state = {
        amount: 0,
        transfer: false,
    }
    handleChange = (ev) => {
        ev.preventDefault()
        // const field = target.name
        const value = ev.target.value

        this.setState({ amount: value }, () => {
            console.log(this.state.amount)
        })
    }
    transferFund = async (e) => {
        e.preventDefault()
        await this.props.transferCoins(this.state.amount)
        this.setState({ transfer: true }, () => {
            setTimeout(() => {
                this.setState({ transfer: false })
            }, 1500)
        })
    }
    render() {
        const { amount, transfer } = this.state
        const { contact, loggedInUser } = this.props
        return (
            <section className="transfer-fund">
                {loggedInUser && (
                    <>
                        <h3>Transfer coins to {contact?.name}</h3>
                        <form onSubmit={(e) => this.transferFund(e)}>
                            <input
                                // ref={this.handleRef}
                                onChange={this.handleChange}
                                value={amount}
                                placeholder="Enter amount"
                                type="number"
                                name="amount"
                                id="amount"
                            />

                            <button>Send</button>
                        </form>
                        {transfer && <h4>transfer done</h4>}
                    </>
                )}
                {!loggedInUser && <h3>You need to login to make transfers</h3> }
            </section>
        )
    }
}
