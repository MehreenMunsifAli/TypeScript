//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_info(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var i = 0; i < args.length; i++) {
        var _a = args[i], key = _a[0], value = _a[1];
        car[key] = value;
    }
    return car;
}
console.log(car_info("honda", "hie"));
console.log(car_info("toyota", "5666", ["color", "pink"]));
console.log(car_info("toyota", "5666", ["color", "pink"], ["modelYear", "2020"]));
