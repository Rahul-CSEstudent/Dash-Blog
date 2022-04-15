/**
 * @param {string} base
 * @param {boolean} cond
 * @param {string} ifClass
 * @param {string} elseClass
 * @return {string}
 */
const merge = (base, cond, ifClass, elseClass) => {
  if (cond) {
    return `${base} ${ifClass}`;
  }
  return `${base} ${elseClass}`;
};

export { merge };
