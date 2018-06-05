import * as properties from './properties';
import * as methods from './methods';
import { addItemsOnAssertion } from './helpers/assertion';

export default function ({ Assertion }) {
  addItemsOnAssertion(properties, Assertion.addProperty.bind(Assertion));
  addItemsOnAssertion(methods, Assertion.addMethod.bind(Assertion));
}
