let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

console.log(weatherConditions);
console.log(todaysWeather);

// slice le chai purano array lai modify gardaina... just naya ma copy matra garcha..
// splice le chai purano lai ni modify garcha