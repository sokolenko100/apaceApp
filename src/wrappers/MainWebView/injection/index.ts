const injectedJavaScript = `
        const footer = document.getElementsByTagName("footer")[0];
        const footerText = footer.textContent;
        const copyrightIndex = footerText.indexOf("©");
        const textAfterCopyrightSymbol = copyrightIndex !== -1 ? footerText.slice(copyrightIndex) : "";
        window.ReactNativeWebView.postMessage(textAfterCopyrightSymbol);`;

export {injectedJavaScript};
