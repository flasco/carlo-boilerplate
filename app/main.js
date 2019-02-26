const carlo = require('carlo');
const path = require('path');

const mountModule = require('./src');

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

  // 挂载模块
  await mountModule(app);

  await app.load('index.html');
})();
