export function addItemsOnAssertion(items, addFn) {
  Object.entries(items).forEach(entry =>
    addFn(entry[0], entry[1]));
}
