import React, {useRef, useCallback} from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import {styles} from './styles';

function initWebViewInjectedJavaScript() {
  const js = `
      function InformationGrab() {
        const footer = document.getElementsByTagName("footer")[0];
        const footerText = footer.textContent;
        const copyrightIndex = footerText.indexOf("©");
        const textAfterCopyrightSymbol = copyrightIndex !== -1 ? footerText.slice(copyrightIndex + 1) : "";
        window.ReactNativeWebView.postMessage(textObj);
      }

    InformationGrab();
    true;
    `;

  return js;
}

type MainWebViewProps = {
  uri: string;
  setInformationGrab: (data:string) => void;
};

export const MainWebView = ({uri, setInformationGrab}: MainWebViewProps) => {
  const webViewRef = useRef<WebView>(null);
  const injectedJavaScript = initWebViewInjectedJavaScript();

  /**
   * Handle form event
   */
  const onMessage = useCallback(
    (event: WebViewMessageEvent) => {
      setInformationGrab(event.nativeEvent.data)
    },
    [],
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
