import React, { Component } from 'react';
import '../less/tickers.less';
import {Crypto} from './crypto.js';
import {loadData} from './data.js';

export class Tickers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		loadData(result => this.handleResult(result));
		this.interval = setInterval(() => loadData(result => this.handleResult(result)), 10 * 1000);
	}

	handleResult(data) {
		this.setState({
			data: data
		});
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
