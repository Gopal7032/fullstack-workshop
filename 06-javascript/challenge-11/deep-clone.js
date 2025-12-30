const deepClone = value => {
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
    return new Set([...value].map(item => deepClone(item)));
  }

  // Map
  if (value instanceof Map) {
    return new Map(
      [...value].map(([key, val]) => [deepClone(key), deepClone(val)])
    );
  }

  // Array
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  // Object
  return Object.keys(value).reduce((clone, key) => {
    clone[key] = deepClone(value[key]);
    return clone;
  }, {});
};
