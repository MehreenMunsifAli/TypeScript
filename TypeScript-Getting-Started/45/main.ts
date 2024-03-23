//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function car_info(manufacturer: string, model: string, ...args: [string, any][]) {
  let car = { manufacturer, model };
  for (let i = 0; i < args.length; i++) {
    const [key, value] = args[i];
    car[key] = value;
  }
  return car;
}

console.log(car_info("honda", "2023"));
console.log(car_info("toyota", "2024", ["color", "pink"]));
console.log(car_info("toyota", "M6121", ["color", "pink"], ["modelYear", "2020"]));

