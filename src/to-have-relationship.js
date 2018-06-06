export default function toHaveRelationship(received, name, model) {
  const { settings } = received.definition;
  const passMsg = () => `expected received model to not have the relationship ${name} with ${model} model`;
  const failMsg = () => `expected received model to have the relationship ${name} with ${model} model`;
  let pass = !this.isNot;
  const expect = (thing) => {
    if (this.isNot) {
      return global.expect(thing).not;
    }
    return global.expect(thing);
  };
  try {
    expect(settings.relations).toMatchObject({
      [name]: { model },
    });
  } catch (err) {
    pass = !pass;
  }
  return { pass, message: pass ? passMsg : failMsg };
}
