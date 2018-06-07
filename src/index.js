import toBeModel from './matchers/to-be-model';
import toHaveRelationship from './matchers/to-have-relationship';
import toHavePropertyOfType from './matchers/to-have-property-of-type';
import toBelongsTo from './matchers/to-belongs-to';
import toHaveOne from './matchers/to-have-one';
import toHaveMany from './matchers/to-have-many';
import toInherits from './matchers/to-inherits';

export default function setup(expect) {
  expect.extend({
    toBeModel,
    toHaveRelationship,
    toHavePropertyOfType,
    toBelongsTo,
    toHaveOne,
    toHaveMany,
    toInherits,
  });
}
