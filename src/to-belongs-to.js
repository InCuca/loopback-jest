
export default function toBelongsTo(received, model, relationship, foreignKey) {
  if (!model) throw Error('missing model name');
  const { settings } = received.definition;
  const getMsg = pass => () => {
    let msg = 'expected received model';
    msg += pass ? ' to not' : ' to';
    msg += ` belongs to ${model}`;
    if (relationship) msg += ` through ${relationship} relationship`;
    if (foreignKey) msg += ` and ${foreignKey} foreignKey`;
    return msg;
  };
  let pass = true;
  try {
    const expected = {
      [relationship]: { type: 'belongsTo', model },
    };
    if (foreignKey) expected[relationship].foreignKey = foreignKey;
    expect(settings.relations).toMatchObject(expected);
  } catch (err) {
    pass = !pass;
  }
  return { pass, message: getMsg(pass) };
}
