import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '@state/store';
import { MainRouterNavigation } from './app/navigation/MainRouter.tsx';

/**
 * This is main app point
 * @constructor
 */
function App(): ReactElement {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <MainRouterNavigation />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
