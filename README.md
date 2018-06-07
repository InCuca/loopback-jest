# loopback-jest
[![Travis](https://img.shields.io/travis/InCuca/loopback-jest/master.svg)](https://travis-ci.org/InCuca/loopback-jest/branches) [![Code Climate](https://img.shields.io/codeclimate/coverage/InCuca/loopback-jest.svg)](https://codeclimate.com/github/InCuca/loopback-jest/test_coverage)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/InCuca/loopback-jest.svg)](https://codeclimate.com/github/InCuca/loopback-jest/maintainability)



Repository of [jest](https://facebook.github.io/jest/) matchers for loopback

## External Dependencies

This plugin expects that you have [jest](https://facebook.github.io/jest/) and [loopback](http://loopback.io) packages available to import.

## Usage with Jest

Install Jest Plugins
```bash
yarn add --dev jest-plugins loopback-jest
```

Find your jest config which is either in your package.json or in a top-level file called jest.config.js. Add a key setupTestFrameworkScriptFile and point it to another file at the top-level called jest-plugins.js.


```js
require('jest-plugins')(['loopback-jest']);
```

## Added Matchers

### .toBeModel()

Expect that a model instance is actually a loopback Model. It uses `instanceof loopback.Model` internally.

Example:
```js
  const model = new loopback.Model();
  expect(model).toBeModel();
```

### .toHaveRelationship(name, model)

Expect that the model instance has a relationship called name, with a model called model.

Example:
```js
  const Soccer = loopback.createModel({
    name: 'Soccer',
    relations: {
      balls: {
        type: 'hasMany',
        model: 'Ball'
      },
    },
  });
  const game = new Soccer();
  expect(game).toHaveRelationship('balls', 'Ball');
```

### .toHavePropertyOfType(name, type)

Expect that the model instance has a property with `name` and `type`.

Example:
```js
  const Soccer = loopback.createModel({
    name: 'Soccer',
    properties: {id: 'number'}
  });
  const game = new Soccer();
  expect(game).toHavePropertyOfType('id', Number);
```

### .toBelongsTo(model, relationship, [foreignKey])

Expect that the model instance belongs to an `model` with named `relationship`, optionally with `foreignKey`.


Example:
```js
  const Soccer = loopback.createModel({
    name: 'Soccer',
    relations: {
      stadium: {
        type: 'belongsTo',
        model: 'Stadium',
        foreignKey: 'stadiumId',
      },
    },
  });
  const game = new Soccer();
  expect(game).toBelongsTo('Stadium', 'stadium', 'stadiumId');
```

### .toHaveOne(model, relationship, [foreignKey])

Expect that the model instance has one `model` with named `relationship`, and optionally with `foreignKey`.


Example:
```js
  const Soccer = loopback.createModel({
    name: 'Soccer',
    relations: {
      winner: {
        type: 'hasOne',
        model: 'Winner',
        foreignKey: 'winnerId',
      },
    },
  });
  const game = new Soccer();
  expect(game).toHaveOne('Winner', 'winner', 'winnerId');
```

### .toHaveMany(model, relationship, [foreignKey])

Expect that the model instance have many `model`s with named `relationship`, and optionally with `foreignKey`.


Example:
```js
  const Soccer = loopback.createModel({
    name: 'Soccer',
    relations: {
      players: {
        type: 'hasMany',
        model: 'Player',
        foreignKey: 'soccerId',
      },
    },
  });
  const game = new Soccer();
  expect(game).toHaveMany('Player', 'players', 'soccerId');
```

### .toInherits(BaseModel)

Expect that the Model class inherits BaseModel.

Example:
```js
  const Game = loopback.createModel({
    name: 'Game',
  });
  const Soccer = loopback.createModel({
    name: 'Soccer',
    base: Game,
  });
  expect(Soccer).toInherits(Game);
```
