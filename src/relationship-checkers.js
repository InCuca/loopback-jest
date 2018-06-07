function validateArgs(args) {
  if (!args[0]) throw Error('missing relationship type');
  if (!args[1]) throw Error('missing model settings');
  if (!args[2]) throw Error('missing model name');
  if (!args[3]) throw Error('missing relationship name');
}

export function isRelationship(...args) {
  validateArgs(args);
  const [type, settings, model, relationship, foreignKey] = args;
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
