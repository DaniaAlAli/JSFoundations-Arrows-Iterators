/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  array.forEach((el1) => console.log(el1));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  let cel = [];
  cel = temperatures.map((number) => (number - 32) * (5 / 9));
  return cel;
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  let hot = [];
  hot = temperatures.filter((number) => number > threshhold);
  return hot;
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  let celthre = (threshhold - 32) * (5 / 9);
  let cel = [];
  cel = temperatures.map((number) => (number - 32) * (5 / 9));
  let hotcel = [];
  hotcel = cel.filter((num) => num > celthre);

  hotcel.forEach((el1) => console.log(el1));
};

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
