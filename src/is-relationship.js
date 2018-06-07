function validateArgs(args) {
  if (!args[0]) throw Error('missing relationship type');
  if (!args[1]) throw Error('missing received model');
  if (!args[2]) throw Error('missing model name');
  if (!args[3]) throw Error('missing relationship name');
}

export default function isRelationship(...args) {
  validateArgs(args);
  const [type, received, model, relationship, foreignKey] = args;
  let pass = true;
  try {
    const expected = {
      [relationship]: { type, model },
    };
    if (foreignKey) expected[relationship].foreignKey = foreignKey;
    expect(received.definition.settings.relations).toMatchObject(expected);
  } catch (err) {
    pass = false;
  }

  return pass;
}
