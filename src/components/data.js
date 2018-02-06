
import axios from 'axios';

let fetchData = function(callback) { 
	return callback(); 
}; 

let fetchCryptocurrencyData = function() { 
	axios.get("https://api.coinmarketcap.com/v1/ticker/") 
		.then(response => { 
			var wanted = ["bitcoin", "ethereum", "litecoin"]; 
			var result = response.data.filter(currency => wanted.includes(currency.id)); 
			return result; 
		}) 
	.catch(err => console.log(err)); 
} 


export default fetchData(fetchCryptocurrencyData);