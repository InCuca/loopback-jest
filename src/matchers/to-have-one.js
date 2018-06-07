import getMessage from '../get-message';
import { isHaveOne } from '../relationship-checkers';

export default function toHaveOne(received, ...args) {
  const pass = isHaveOne(
    received.definition.settings,
    ...args,
  );
  return { pass, message: getMessage(pass, 'have one', ...args) };
}
