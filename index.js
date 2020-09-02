// 81.3% faster than x = String(x).
// 63% faster than num = `${num}`.
// (tested at  https://jsbench.me/)

export const toStr = (arg) => arg + '';
