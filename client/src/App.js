import Routes from './router';
import dva from './utils/dva';

import appModel from './models/app';

const app = dva({
  initialState: {},
  models: [appModel],
  onError(e) {
    // eslint-disable-next-line no-console
    console.log('onError', e);
  },
});

const App = app.start(Routes);

export default App;
