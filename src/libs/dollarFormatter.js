/**
 * 
 * @param {*} value 
 * This  @function for formatting number of currency
 */
function dollarFormatter(value) {
  const formatterDollar = (value.toFixed(2)).toLocaleString()
  return formatterDollar
}

export default dollarFormatter