import { expect } from 'chai';

export function relationship(name, model) {
  const { settings } = this._obj.definition;
  expect(settings.relations).to.haveOwnProperty(name);

  const relObj = settings.relations[name];

  expect(relObj).to.haveOwnProperty('model');
  expect(relObj.model).to.not.empty;
  expect(relObj.model).to.equal(model);
}
