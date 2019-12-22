const exec = require('util').promisify(require('child_process').exec);

let output = {};
beforeEach(async () => {
  if (output.stdout) return output;

  output = await exec('npm run build:package');
  return output;
});

test('[clean] should clean dist and build', async () => {
  const { stderr } = await exec('npm run clean');

  expect(!!stderr).toEqual(false);
});

test('[build:package] should build dist without error', () => {
  expect(!!output.stderr).toEqual(false);
});

test('[build:package] should output \'Successfully compiled\'', () => {
  const didCompile = (/(successfully) compiled/i).test(output.stdout);
  expect(didCompile).toEqual(true);
});

