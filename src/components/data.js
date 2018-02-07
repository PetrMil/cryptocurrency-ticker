
import axios from 'axios';

export let loadData = function(callback) {
	fetchCryptocurrencyData(callback);
};

let fetchCryptocurrencyData = function(callback) {
	axios.get("https://api.coinmarketcap.com/v1/ticker/")
		.then(response => {
			var wanted = ["bitcoin", "ethereum", "litecoin"];
			var result = response.data.filter(currency => wanted.includes(currency.id));
			return callback(result);
		})
	.catch(err => console.log(err));
}