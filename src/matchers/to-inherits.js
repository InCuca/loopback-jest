function getMessage(...args) {
  const [pass, model] = args;
  return () => {
    let msg = 'expected received model';
    msg += pass ? ' to not' : ' to';
    msg += ` inherits ${model}`;
    return msg;
  };
}

export default function toHaveOne(received, model) {
  if (!model) throw Error('missing model name');
  let pass = true;
  try {
    expect(received.prototype).toBeInstanceOf(model);
  } catch (err) {
    pass = false;
  }
  return { pass, message: getMessage(pass, received, model) };
}
