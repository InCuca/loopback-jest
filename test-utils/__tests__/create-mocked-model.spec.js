import createMockedModel from '../create-mocked-model';

describe('createMockedModel test util', () => {
  it('throws without model name', () => {
    expect(() => createMockedModel()).toThrow();
  });

  it('creates a Model', () => {
    const stub = {};
    const Foo = createMockedModel('Foo', stub);
    expect(Foo.definition.name).toEqual('Foo');
  });

  it('creates a Model with relationship', () => {
    const mock = {
      relations: {
        balls: {
          type: 'hasMany',
          model: 'Ball',
          foreignKey: 'ballId',
        },
      },
    };
    const Foo = createMockedModel('Foo', mock);
    expect(Foo.definition.settings.relations).toEqual(mock.relations);
  });

  it('creates a Model only passing name', () => {
    const Foo = createMockedModel('Foo');
    expect(Foo.definition.name).toEqual('Foo');
  });

  it('throws if missing model name', () => {
    expect(() => createMockedModel()).toThrow();
  });
});
