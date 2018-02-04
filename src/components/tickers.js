import React, { Component } from 'react';
import axios from 'axios';
import '../less/tickers.less';
import {Crypto} from './crypto.js';

export class Tickers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "Bitcoin",
					id: "bitcoin",
					symbol: "BTC",
					price_usd: 1,
					percent_change_1h: 1,
					percent_change_24h: 1,
					percent_change_7d:1
				},
				{
					name: "Ethereum",
					id: "ethereum",
					symbol: "ETH",
					price_usd: 1,
					percent_change_1h: 1,
					percent_change_24h: 1,
					percent_change_7d:1
				},
				{
					name: "Litecoin",
					id: "litecoin",
					symbol: "LTC",
					price_usd: 1,
					percent_change_1h: 1,
					percent_change_24h: 1,
					percent_change_7d:1
				}
			]
		}
	}

	componentDidMount() {
			this.fetchCryptocurrencyData();
			this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
	}

	fetchCryptocurrencyData() {
			axios.get("https://api.coinmarketcap.com/v1/ticker/")
					.then(response => {
							var wanted = ["bitcoin", "ethereum", "litecoin"];
							var result = response.data.filter(currency => wanted.includes(currency.id));
							this.setState({ data: result});
					})
					.catch(err => console.log(err));
	}

	render() {
		var html = this.state.data.map((currency) => {
			return <Crypto key={currency.id} data={currency} />
		})
		return (
			<div className="container">
				<ul className="tickers">{html}</ul>
				<p>Information updated every 10 seconds courtesy of coinmarketcap.com</p>
			</div>
			);
	}
}
