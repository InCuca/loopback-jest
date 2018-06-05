import loopback from 'loopback';
import { expect } from 'chai';

export function model() {
  expect(this._obj).to.instanceof(loopback.Model);
}
