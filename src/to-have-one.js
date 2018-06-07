function getMessage(...args) {
  const [pass, model, relationship, foreignKey] = args;
  return () => {
    let msg = 'expected received model';
    msg += pass ? ' to not' : ' to';
    msg += ` has one ${model}`;
    if (relationship) msg += ` through ${relationship} relationship`;
    if (foreignKey) msg += ` and ${foreignKey} foreignKey`;
    return msg;
  };
}

export default function toHaveOne(received, ...args) {
  const [model, relationship, foreignKey] = args;
  if (!model) throw Error('missing model name');
  const { settings } = received.definition;
  let pass = true;
  try {
    const expected = {
      [relationship]: { type: 'hasOne', model },
    };
    if (foreignKey) expected[relationship].foreignKey = foreignKey;
    expect(settings.relations).toMatchObject(expected);
  } catch (err) {
    pass = false;
  }
  return { pass, message: getMessage(pass, ...args) };
}
