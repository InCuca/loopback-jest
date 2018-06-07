export function isRelationship(type, settings, model, relationship, foreignKey) {
  if (!type) throw Error('missing relationship type');
  if (!settings) throw Error('missing model settings');
  if (!model) throw Error('missing model name');
  if (!relationship) throw Error('missing relationship name');

  let pass = true;
  try {
    const expected = {
      [relationship]: { type, model },
    };
    if (foreignKey) expected[relationship].foreignKey = foreignKey;
    expect(settings.relations).toMatchObject(expected);
  } catch (err) {
    pass = false;
  }

  return pass;
}

export function isHasMany(...args) {
  return isRelationship('hasMany', ...args);
}
