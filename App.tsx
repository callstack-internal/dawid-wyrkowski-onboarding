import React, { ReactElement } from 'react';
import { AccessibilityInfo } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { store } from '@state/store';
import { MainRouterNavigation } from '@navigation/MainRouter.tsx';
import { AccessibilityInfoProvider } from '@contexts/AccessibilityInfoContext';

AccessibilityInfo.isScreenReaderEnabled().then();

/**
 * This is main app point
 * @constructor
 */
function App(): ReactElement {
  return (
    <GestureHandlerRootView>
      <AccessibilityInfoProvider>
        <Provider store={store}>
          <MainRouterNavigation />
        </Provider>
      </AccessibilityInfoProvider>
    </GestureHandlerRootView>
  );
}

export default App;
