import _ from 'lodash';

export function calculatePreTaxTotal(products, cart) {
	let total = 0;

	for (let id in products) {
		const { price } = products[id];
		const quantity = cart[id] || 0;
		total += price * quantity;
	}

	return total.toFixed(2);
}
export function calculateTaxTotal(preTax, taxRate) {
	console.log(taxRate);
	return (preTax * (1 + +taxRate)).toFixed(2);
}

export function calculateTax(preTax, taxRate) {
	return (preTax * +taxRate).toFixed(2);
}

export function calculateQuantity(cart) {
	let quantity = 0;
	for (let id in cart) {
		quantity += cart[id];
	}
	return quantity;
}
export const states = [
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District of Columbia',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming'
];
const taxRates = [
	0.04,
	0,
	0.056,
	0.065,
	0.0725,
	0.029,
	0.0635,
	0,
	0.06,
	0.06,
	0.04,
	0.04,
	0.06,
	0.0625,
	0.07,
	0.06,
	0.065,
	0.06,
	0.0445,
	0.055,
	0.06,
	0.0625,
	0.06,
	0.06875,
	0.07,
	0.04225,
	0,
	0.055,
	0.0685,
	0,
	0.06625,
	0.05125,
	0.04,
	0.0475,
	0.05,
	0.0575,
	0.045,
	0,
	0.06,
	0.115,
	0.07,
	0.06,
	0.045,
	0.07,
	0.0625,
	0.0485,
	0.06,
	0.043,
	0.065,
	0.06,
	0.05,
	0.04
];
export const stateTaxRates = _.zipObject(states, taxRates);
