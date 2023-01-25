//1 Map new array with 60% discount
let prices = [200, 450, 234, 430, 670, 500, 150];

let discounts = prices.map( price => 0.4*price );

//2 Map a new array containting text "Expensive" for each price over 200e
//and "cheap" for the rest

let texts = prices.map( price => price > 200 ? "Expensive" : "Cheap" )

//3 Filter only prices less than 300e
let cheap = prices.filter( price => price < 300  );

//4 Filter only the names that are longer than 6 characters
let names = ["John", "Lisa", "Marco", "Elizabeht", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];

let shorts  = names.filter( n => n.length > 6 );