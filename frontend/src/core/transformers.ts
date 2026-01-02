// frontend/src/core/transformers.ts

/**
 * JSON → Array
 * Input:  { user1: {...}, user2: {...} }
 * Output: [ {...}, {...} ]
 */
export function jsonToArray(input: Record<string, any>) {
  if (typeof input !== "object" || Array.isArray(input) || input === null) {
    throw new Error("jsonToArray expects a JSON object as input");
  }

  return Object.values(input);
}

/**
 * Array → JSON
 * Input:  [ {name:"A"}, {name:"B"} ]
 * Output: { "0": {...}, "1": {...} }
 * OR (keyField="name"):
 * Output: { "A": {...}, "B": {...} }
 */
export function arrayToJson(
  input: any[],
  keyField?: string
): Record<string, any> {
  if (!Array.isArray(input)) {
    throw new Error("arrayToJson expects an array as input");
  }

  const result: Record<string, any> = {};

  input.forEach((item, index) => {
    if (keyField && item && item[keyField] !== undefined) {
      result[item[keyField]] = item;
    } else {
      result[index] = item;
    }
  });

  return result;
}

/**
 * Array Mapping
 * Input:  ["apple", "banana"]
 * Output: [ {name:"apple", value:"apple"}, ... ]
 */
export function arrayMapping(input: any[]) {
  if (!Array.isArray(input)) {
    throw new Error("arrayMapping expects an array as input");
  }

  return input.map((item) => ({
    name: item,
    value: item,
  }));
}
