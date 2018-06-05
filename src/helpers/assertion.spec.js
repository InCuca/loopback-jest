import { addItemsOnAssertion } from './assertion';

describe('helpers/assertion', () => {
  describe('addItemsOnAssertion', () => {
    it('call addFn with object entries', () => {
      const addFn = jest.fn();
      const obj = { entryA: 'valueA', entryB: 'valueB' };

      addItemsOnAssertion(obj, addFn);
      expect(addFn.mock.calls.length).toBe(2);
      expect(addFn.mock.calls).toEqual(Object.entries(obj));
    });
  });
});

