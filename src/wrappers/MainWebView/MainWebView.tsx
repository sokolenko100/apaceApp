import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';
import {styles} from './styles';

function initWebViewInjectedJavaScript() {
  const js = `
        window.ReactNativeBridgesActions = ${JSON.stringify('actions')};
    `;

  return js;
}

export const MainWebView = uri => {
  const webViewRef = useRef<WebView>(null);
  const injectedJavaScript = initWebViewInjectedJavaScript();

  return (
    <WebView
      ref={webViewRef}
      style={styles.fullSizeWebViewContainer}
      source={{
        uri,
      }}
      injectedJavaScript={injectedJavaScript}
      originWhitelist={['*']}
      allowFileAccess={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
      allowFileAccessFromFileURLs={true}
      allowUniversalAccessFromFileURLs={true}
    />
  );
};
