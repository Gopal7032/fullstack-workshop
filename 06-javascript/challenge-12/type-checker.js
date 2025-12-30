const typeOf = value => {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (typeof value === "number" && isNaN(value)) return "nan";
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "symbol") return "symbol";
  if (typeof value === "function") return "function";
  if (value instanceof Promise) return "promise";
  if (Array.isArray(value)) return "array";
  if (value instanceof Date) return "date";
  if (value instanceof Map) return "map";
  if (value instanceof Set) return "set";
  if (value instanceof RegExp) return "regexp";
  if (value instanceof Error) return "error";
  if (typeof value === "object") return "object";

  return typeof value;
};

// TESTS with template literals for readable output
const testValues = [
  null, undefined, 42, NaN, "hello", true, Symbol(),
  [], {}, () => {}, new Date(), new Map(), new Set(),
  /regex/, new Error(), Promise.resolve()
];

testValues.forEach(val => {
  console.log(`Value: ${val} → Type: ${typeOf(val)}`);
});
