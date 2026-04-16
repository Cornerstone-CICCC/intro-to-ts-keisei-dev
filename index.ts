const doubleNumber = (value: number): number => {
  return value * 2;
};

const squareNumber = (value: number): number => {
  return value * value;
};

const isEven = (value: number): boolean => {
  return value % 2 === 0;
};

const isAdult = (age: number): boolean => {
  return age >= 18;
};

const reverseString = (text: string): string => {
  return text.split("").reverse().join("");
};

const capitalizeString = (text: string): string => {
  if (text.length === 0) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1);
};

console.log("doubleNumber(6):", doubleNumber(6));
console.log("squareNumber(5):", squareNumber(5));
console.log("isEven(9):", isEven(9));
console.log("isAdult(20):", isAdult(20));
console.log('reverseString("TypeScript"):', reverseString("TypeScript"));
console.log('capitalizeString("hello world"):', capitalizeString("hello world"));
