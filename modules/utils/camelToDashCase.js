const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;

/**
 * Converts a camel-case string to a dash-case string
 * @param {string} str - str that gets converted to dash-case
 */
export default str => str.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-')
