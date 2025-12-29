const typeOf = (value) => {
 
    // null
  if (value === null) 
    return "null";

  // undefined
  if (value === undefined) 
    return "undefined";

  // NaN 
  if (typeof value === "number" && isNaN(value)) 
    return "nan";

  // Primitive types
  if (typeof value === "string") 
    return "string";
  if (typeof value === "number") 
    return "number";
  if (typeof value === "boolean") 
    return "boolean";
  if (typeof value === "symbol") 
    return "symbol";
  if (typeof value === "function") 
    return "function";

  // Promise
  if (value instanceof Promise) 
    return "promise";

  // Array
  if (Array.isArray(value))
     return "array";

  // Date
  if (value instanceof Date) 
    return "date";

  // Map
  if (value instanceof Map)
     return "map";

  // Set
  if (value instanceof Set) 
    return "set";

  // RegExp
  if (value instanceof RegExp) 
    return "regexp";

  // Error
  if (value instanceof Error) 
    return "error";

  // Object 
  if (typeof value === "object")
     return "object";

  // Default fallback
  return typeof value;
};

//TEST
console.log(typeOf(null));              // "null"
console.log(typeOf(undefined));         // "undefined"
console.log(typeOf(42));                // "number"
console.log(typeOf(NaN));               // "nan"
console.log(typeOf("hello"));           // "string"
console.log(typeOf(true));              // "boolean"
console.log(typeOf(Symbol()));          // "symbol"
console.log(typeOf([]));                // "array"
console.log(typeOf({}));                // "object"
console.log(typeOf(() => {}));          // "function"
console.log(typeOf(new Date()));        // "date"
console.log(typeOf(new Map()));         // "map"
console.log(typeOf(new Set()));         // "set"
console.log(typeOf(/regex/));           // "regexp"
console.log(typeOf(new Error()));       // "error"
console.log(typeOf(Promise.resolve())); // "promise"