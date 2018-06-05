import { expect } from 'chai';

export function haveMany(relationship, model, foreignKey) {
  expect(this._obj).to.have.relationship(relationship, model);

  const { settings } = this._obj.definition;
  const relObj = settings.relations[relationship];
  expect(relObj).to.haveOwnProperty('type');
  expect(relObj.type).to.equal('hasMany');

  expect(relObj).to.haveOwnProperty('foreignKey');
  expect(relObj.foreignKey).to.not.empty;
  if (foreignKey) {
    expect(relObj.foreignKey).to.equal(foreignKey);
  }
}
