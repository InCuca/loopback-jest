function toString(thing) {
  if (typeof thing === 'object') return thing.type.name;
  if (typeof thing === 'function') return thing.name;
  if (typeof thing === 'string') return thing;
  return '';
}

export default function toHavePropertyOfType(received, prop, type) {
  const passMsg = () => `expected model to not have property ${prop} of ${toString(type)} type`;
  const failMsg = () => `expected model to have property ${prop} of ${toString(type)} type`;
  const getReturn = pass => ({
    pass, message: pass ? passMsg : failMsg,
  });

  const props = received.definition.properties;
  if (!props || !prop || !type) return getReturn(false);

  // transform both subject and expected into lowercase
  // strings to compare both
  let subject = toString(props[prop]);
  let expected = toString(type);

  subject = subject.toLowerCase();
  expected = expected.toLowerCase();
  return getReturn(subject === expected);
}
