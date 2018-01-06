function isString(text) {
  return typeof text == 'string' || text insfanceof String;
}
function getUniques(arr) {
  return Array.from(new Set(arr))
}
