const test = require('tape');
const {
fn
} = require('scripts');

test('fn', t => {
  const actual = fn();
  const expect = true;
  t.equal(actual, expect);
  t.end();
});
