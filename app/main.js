const carlo = require('carlo');
const path = require('path');

const TestControl = require('./test-control');

(async () => {
  const app = await carlo.launch(
    {
      width: 800,
      height: 600,
      args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : [],
    }
  );

  app.on('exit', () => process.exit());

  app.serveFolder(path.resolve(__dirname, '../static'));

  const control = new TestControl();

  await app.exposeObject('control', control);

  await app.exposeFunction('_envFunc', () => process.env);

  await app.load('index.html');
})();
