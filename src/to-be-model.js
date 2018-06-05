import loopback from 'loopback';

export default function toBeModel(received) {
  const pass = received instanceof loopback.Model;
  const passMsg = () => `expected ${received} not to be instance of loopback.Model`;
  const failMsg = () => `expected ${received} to be instance of loopback.Model`;
  return { pass, message: pass ? passMsg : failMsg };
}
