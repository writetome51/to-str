// 81.3% faster than  String(x).
// 63% faster than  `${num}`.
// (tested at  https://jsbench.me/)

export const toStr = (arg) => arg + '';
