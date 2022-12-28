import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { Component } from "react"
import "./assets/styles.scss"

import { AppHeader } from "./cmps/AppHeader"
// import { UserInfo } from "./views/User-info"
import { ContactView } from "./views/ContactView"
import { ContactDetails } from "./views/ContactDetails"
import { StatisticPage } from "./views/StatisticPage"
import { HomePage } from "./views/HomePage"
import { ContactEdit } from "./views/ContactsEdit"

export class App extends Component {
    render() {
        return (
            <Router>
                <section className="App">
                    <AppHeader />
                    <section className="main-container">
                        <Switch>
                            <Route path="/contact/edit/:id?" component={ContactEdit} />
                            <Route path="/contact/:id" component={ContactDetails} />
                            <Route path="/contact" component={ContactView} />
                            <Route path="/statistics" component={StatisticPage} />
                            {/* <Route path="/user" component={UserInfo} /> */}
                            <Route path="/" component={HomePage} />
                        </Switch>
                    </section>
                </section>
            </Router>
        )
    }
}
