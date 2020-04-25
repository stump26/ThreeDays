import { AppLoading, Asset } from 'expo';
import { Image, StatusBar } from 'react-native';
import React, { useState } from 'react';

import RootNavigator from './Components/navigation/RootStackNavigator';
import RootProvider from './providers';
import Svgs from './utils/svg';

function cacheImages(images: Image[]): Image[] {
  return images.map((image: Image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const loadAssetsAsync = async (): Promise<void> => {
  const imageAssets = cacheImages(Svgs);
  await Promise.all([...imageAssets]);
};

function App(): React.ReactElement {
  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={(): void => {
          console.log('loading complete');
          setLoading(true);
        }}
        // onError={console.warn}
      />
    );
  }
  return (
    <RootProvider>
      <>
        <StatusBar barStyle="light-content" />
        <App />
      </>
    </RootProvider>
  );
}

export default ProviderWrapper;
