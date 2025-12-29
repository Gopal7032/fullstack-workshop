function deepClone(value) {
  
    // null and primitives
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Set
  if (value instanceof Set) {
    const clonedSet = new Set();
    value.forEach(item => {
      clonedSet.add(deepClone(item));
    });
    return clonedSet;
  }

  // Map
  if (value instanceof Map) {
    const clonedMap = new Map();
    value.forEach((val, key) => {
      clonedMap.set(deepClone(key), deepClone(val));
    });
    return clonedMap;
  }

  // Array
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  //Object
  const clonedObj = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(value[key]);
    }
  }

  return clonedObj;
}

//TEST
const original = {
  name: "John",
  address: { city: "New York", zip: "10001" },
  hobbies: ["reading", "gaming"],
  metadata: {
    created: new Date(),
    tags: new Set(["user", "admin"])
  }
};

const cloned = deepClone(original);

cloned.address.city = "Boston";
cloned.hobbies.push("swimming");

console.log(original.address.city); // "New York"
console.log(original.hobbies);      // ["reading", "gaming"]