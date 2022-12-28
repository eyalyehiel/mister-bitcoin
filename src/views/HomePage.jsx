import { Component } from "react"
import { Chart } from "../cmps/Chart"
import { signUp,getLoggedInUser } from "../store/actions/user-actions"
import { bitcoinService } from "../services/bitcoin-service"
import { connect } from "react-redux"
class _HomePage extends Component {
    state = {
        bitcoin: null,
        user: {
            name: "",
        },

        marketPriceData: null,
    }
    async componentDidMount() {
        document.title="Mister Bitcoin"
        const marketPriceData = await bitcoinService.getMarketPrice()
        this.setState({ marketPriceData })
    }
    handleChange = (ev) => {
        ev.stopPropagation()
        const field = ev.target.name
        const value = ev.target.value
        
        this.setState((prevState) => ({
            user: { ...prevState.user, [field]: value },
        }))
    }
    userAuth = async (ev,user) => {
        ev.preventDefault()
        console.log(ev);
        await this.props.signUp(user)
        const bitcoin = await bitcoinService.getRate(user.coins)
        this.setState({bitcoin})
    }
    render() {
        const { marketPriceData, user, bitcoin } = this.state
        const {loggedInUser} = this.props
        return (
            <section className="home-page">
                <section className="hero">
                    <section className="hero-intro">
                        <h1>Welcome to Mister Bitcoin</h1>
                        <h3>
                            Discover our best financial features to succeed in
                            your goals, Improve your knowledge everywhere and
                            everytime!
                        </h3>
                    </section>
                    <section className="hero-img">
                        <img
                            src={require("../assets/imgs/hero-img.png")}
                            alt=""
                        />
                    </section>
                </section>
                <section className="features">
                    <section className="stats">
                        <h3>Check out latest statistics!</h3>
                        {marketPriceData && (
                            <Chart data={marketPriceData} />
                        )}
                    </section>
                    <section className="login">
                        {!loggedInUser && (
                            <form onSubmit={(e) => this.userAuth(e,user)}>
                                <input onChange={(e)=>this.handleChange(e)} value={user.name} placeholder="Enter name" type="text" name="name" id="name" />

                                <button>Sign Up Now!</button>
                            </form>
                        )}
                        {loggedInUser && (
                            <section className="user-info">
                                <section className="profile-body">
                                    <h2>Name: {loggedInUser.name}</h2>
                                    <h2>Coins: {loggedInUser.coins}</h2>
                                    <h2>Bitcoin: {bitcoin}</h2>
                                </section>
                                <section className="moves">Moves</section>
                            </section>
                        )}
                    </section>
                </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedInUser: state.userModule.loggedInUser,
})

const mapDispatchToProps = {
    signUp,
    getLoggedInUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
