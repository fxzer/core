/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */

/*! #__NO_SIDE_EFFECTS__ */
/* 传入字符串集合，返回一个判断参数是否在合集中的函数: isHTMLTag */
export function makeMap(
  str: string,
  expectsLowerCase?: boolean,
): (key: string) => boolean {
  const set = new Set(str.split(','))
  return expectsLowerCase
    ? val => set.has(val.toLowerCase())
    : val => set.has(val)
}
