import React, {useRef, useCallback} from 'react';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {styles} from './styles';
import {injectedJavaScript} from './injection';

type MainWebViewProps = {
  uri: string;
  setInformationGrab: (data: string) => void;
};
export const MainWebView = ({uri, setInformationGrab}: MainWebViewProps) => {
  const webViewRef = useRef<WebView>(null);

  /**
   * Handle form event
   */
  const onMessage = useCallback(
    (event: WebViewMessageEvent) => {
      setInformationGrab(event.nativeEvent.data);
    },
    [setInformationGrab],
  );

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
      onMessage={onMessage}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
      allowFileAccessFromFileURLs={true}
      allowUniversalAccessFromFileURLs={true}
    />
  );
};
