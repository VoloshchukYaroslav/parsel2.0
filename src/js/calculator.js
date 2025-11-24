// 1.Дефолтний експорт, можна експортувати виключно щось одне
// export default function add(a, b) {
//   return a + b;
// }

//2.Дефолтний експорт, можна експортувати як обʼєкт

// function add(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function multiplat(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Ділення на нуль не можливе";
//   }
//   return a / b;
// }

// export default { add, minus, multiplat, divide };

//3.Іменний експорт

export const add = (a, b) => {
  return a + b;
};

export const minus = (a, b) => {
  return a - b;
};

export const multiplat = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) {
    return "Ділення на нуль не можливе";
  }
  return a / b;
};
