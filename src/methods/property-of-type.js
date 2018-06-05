import { expect } from 'chai';

export function propertyOfType(prop, type) {
  const props = this._obj.definition.properties;
  expect(props).to.ownProperty(prop);

  // transform both subject and expected into lowercase
  // strings to compare both
  let subject = props[prop];
  let expected = type;
  if (typeof subject === 'object') {
    subject = subject.type;
  }
  if (typeof subject === 'function') {
    subject = subject.name;
  }
  if (typeof expected === 'function') {
    expected = expected.name;
  }
  subject = subject.toLowerCase();
  expected = expected.toLowerCase();
  expect(subject).to.equal(expected);
}
