import { expect } from 'chai';

export function inherits(model) {
  expect(this._obj.prototype).to.instanceOf(model);
}
