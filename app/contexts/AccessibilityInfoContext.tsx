import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

interface AccessibilityInfoContextProps {
  isScreenReaderEnabled: boolean;
}
export const AccessibilityInfoContext =
  createContext<AccessibilityInfoContextProps>({
    isScreenReaderEnabled: false
  });

interface AccessibilityInfoProviderProps {
  children: ReactNode | null;
}

export function AccessibilityInfoProvider({
  children
}: AccessibilityInfoProviderProps) {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const contextValue = useMemo(
    () => ({
      isScreenReaderEnabled
    }),
    [isScreenReaderEnabled]
  );

  AccessibilityInfo.isScreenReaderEnabled().then(setIsScreenReaderEnabled);

  return (
    <AccessibilityInfoContext.Provider value={contextValue}>
      {children}
    </AccessibilityInfoContext.Provider>
  );
}
