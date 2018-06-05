import loopback from 'loopback';

export default function (name, schema = {}) {
  const defaultSchema = {
    name,
    properties: {},
  };
  if (name) defaultSchema.plural = `${name}s`;

  const settings = {
    ...defaultSchema,
    ...schema,
  };
  return loopback.createModel(settings);
}
