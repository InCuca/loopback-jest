import toBeModel from './to-be-model';

export default function setup(expect) {
  expect.extend({
    toBeModel,
  });
}
