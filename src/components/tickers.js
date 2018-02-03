import React, { Component } from 'react';
import '../less/tickers.less';
import {Crypto} from './crypto.js';

export class Tickers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 'Bitcoin',
					short_name: 'BTC',
					price: 1,
					price_1hr: 1,
					price_24hr: 1,
					price_7d:1
				},
								{
					id: 'Ethereum',
					short_name: 'ETH',
					price: 1,
					price_1hr: 1,
					price_24hr: 1,
					price_7d:1
				},
								{
					id: 'Litecoin',
					short_name: 'LTC',
					price: 1,
					price_1hr: 1,
					price_24hr: 1,
					price_7d:1
				}
			]
		}
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
