export default function getMessage(...args) {
  const [pass, type, model, relationship, foreignKey] = args;
  return () => {
    let msg = 'expected received model';
    msg += pass ? ' to not' : ' to';
    msg += ` ${type} ${model}s`;
    if (relationship) msg += ` through ${relationship} relationship`;
    if (foreignKey) msg += ` and ${foreignKey} foreignKey`;
    return msg;
  };
}
