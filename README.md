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

```js
expect(modelInstance).to.be.model
expect(Model).to.have.relationship('name', 'RelatedModel')
expect(Model).to.have.a.propertyOfType('property', Object)
expect(Model).to.belongsTo('relationship', 'RelatedModel')
expect(Model).to.belongsTo('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.haveOne('relationship', 'RelatedModel')
expect(Model).to.haveOne('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.haveMany('relationship', 'RelatedModel')
expect(Model).to.haveMany('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.inherits(BaseModel)
```
