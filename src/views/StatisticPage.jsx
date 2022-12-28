import { Component } from "react"
import { Chart } from "../cmps/Chart"
import { bitcoinService } from "../services/bitcoin-service"

export class StatisticPage extends Component {
    state = {
        marketPriceData: null,
        tradeVolumeData: null,
    }
    async componentDidMount() {
        const marketPriceData = await bitcoinService.getMarketPrice()
        const tradeVolumeData = await bitcoinService.getTradeVolume()
        this.setState({ marketPriceData, tradeVolumeData })
    }
    render() {
        const { marketPriceData, tradeVolumeData } = this.state
        return (
            <section className="statistic-page">
                <h1>Latest statistics</h1>
                {marketPriceData && <Chart data={marketPriceData} />}
                {tradeVolumeData && <Chart data={tradeVolumeData} />}
            </section>
        )
    }
}
