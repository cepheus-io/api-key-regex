const validateAblyApiKey = require('./validateAblyApiKey');

test('I2E_JQ.JE8vqw:gdkBxxxxxxxxOwFw is valid', () => {
  expect(validateAblyApiKey('I2E_JQ.JE8vqw:gdkBxxxxxxxxOwFw')).toBe(true);
});

test('I2E_JQ.JE8vqw:gdkBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOwFw is valid', () => {
  expect(validateAblyApiKey('I2E_JQ.JE8vqw:gdkBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxOwFw')).toBe(true);
});

test('I2E_JQ.JE-vqw:gdkBxxxxxxxxOwFw is valid', () => {
  expect(validateAblyApiKey('I2E_JQ.JE-vqw:gdkBxxxxxxxxOwFw')).toBe(true);
});

test('I2E_JQ.JE-vqw:-dkBxxxxxxxxOwFw is valid', () => {
  expect(validateAblyApiKey('I2E_JQ.JE-vqw:-dkBxxxxxxxxOwFw')).toBe(true);
});

test('I2E?JQ.JE-vqw:gdkBxxxxxxxxOwFw is invalid due to incorrect app ID.', () => {
  expect(validateAblyApiKey('I2E?JQ.JE-vqw:-dkBxxxxxxxxOwFw')).toBe(false);
});

test('I2E_JQ.JE?vqw:gdkBxxxxxxxxOwFw is invalid due to incorrect key ID.', () => {
  expect(validateAblyApiKey('I2E_JQ.JE?vqw:-dkBxxxxxxxxOwFw')).toBe(false);
});

test('I2E_JQ.JE8vqw:?dkBxxxxxxxxOwFw is invalid due to incorrect key secret.', () => {
  expect(validateAblyApiKey('I2E_JQ.JE8vqw:?dkBxxxxxxxxOwFw')).toBe(false);
});