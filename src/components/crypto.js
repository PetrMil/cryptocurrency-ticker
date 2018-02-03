import React, { Component } from 'react';
import '../less/crypto.less';

export class Crypto extends Component {

	render() {

		var {id, short_name, price, price_1hr, price_24hr, price_7d} = this.props.data;

		return (
			<div>
				<li className={id.toLowerCase()}>
					<h2>{id} {short_name}</h2>
					<h1>${price} </h1>
					<p>{price_1hr}% 1hr</p>
					<p>{price_24hr}% 24hrs</p>
					<p>{price_7d}% 7days</p>
				</li>
			</div>
			);
	}
}
