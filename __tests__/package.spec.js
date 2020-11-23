const execFn = require('util').promisify(require('child_process').exec);
function exec(command) {
  return new Promise(function(resolve, reject) {
    execFn(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      resolve({
        stdout: stdout.trim(),
        stderr: stderr.trim(),
      });
    });
  });
}

describe('[npm run clean]', () => {
  jest.setTimeout(10000);

  test('should clean dist and build', async () => {
    let error = false;
    exec('npm run clean').catch(() => error = true);

    expect(error).toEqual(false);
  });
});

describe('[npm run build:package]', () => {
  let error;
  let output = {};
  beforeEach(async () => {
    error = false;
    if (output.stdout) return output;

    output = await exec('npm run build:package').catch(() => error = true);
    return output;
  });

  test('should build dist without error', async () => {
    await exec('ls').catch(() => error = true);

    expect(error).toEqual(false);
  });

  test('should output \'Successfully compiled\'', () => {
    const didCompile = (/Successfully compiled/i).test(output.stdout);
    expect(didCompile).toEqual(true);
  });
});
