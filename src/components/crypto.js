import React, { Component } from 'react';
import '../less/crypto.less';

export class Crypto extends Component {

	render() {

		var {name, id, symbol, price_usd, percent_change_1h, percent_change_24h, percent_change_7d} = this.props.data;

		return (
			<div>
				<li className={id}>
					<h3>{name} ({symbol})</h3>
					<h1>${(+price_usd).toFixed(2)} </h1>
					<p>{percent_change_1h}% 1hr</p>
					<p>{percent_change_24h}% 24hrs</p>
					<p>{percent_change_7d}% 7days</p>
				</li>
			</div>
			);
	}
}
