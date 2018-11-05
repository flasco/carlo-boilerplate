const carlo = require('carlo');
const path = require('path');

(async () => {
  const app = await carlo.launch(
    {
      bgcolor: '#ffffff',
      width: 800,
      height: 600,
      args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : [],
    }
  );

  app.on('exit', () => process.exit());

  // Tell carlo where your web files are located.
  app.serveFolder(path.resolve(__dirname, './static'));

  // Expose 'env' function in the web environment.
  // eslint-disable-next-line no-unused-vars
  await app.exposeFunction('_envFunc', _ => process.env);

  // Navigate to the main page of your app.
  await app.load('index.html');
})();
