const exec = require('util').promisify(require('child_process').exec);

describe('[npm run clean]', () => {
  jest.setTimeout(10000);

  test('should clean dist and build', async () => {
    const { stderr } = await exec('npm run clean');

    expect(!!stderr).toEqual(false);
  });
});

describe('[npm run build:package]', () => {
  let output = {};
  beforeEach(async () => {
    if (output.stdout) return output;

    output = await exec('npm run build:package');
    return output;
  });

  test('should build dist without error', () =>
    expect(!!output.stderr).toEqual(false));

  test('should output \'Successfully compiled\'', () => {
    const didCompile = (/(successfully) compiled/i).test(output.stdout);
    expect(didCompile).toEqual(true);
  });
});
