import React, {FC, useEffect, useState} from 'react';
import {styles} from './styles';
import {View, SafeAreaView, Text} from 'react-native';
import {getWebsites} from './api';
import {MainWebView} from '../../wrappers/MainWebView/MainWebView';

type ListOfSitesScreenProps = {
  route: {
    params: {
      email: string;
    };
  };
};

const ListOfSitesScreen: FC<ListOfSitesScreenProps> = ({
  route = {params: {email: ''}},
}) => {
  const {email} = route.params;
  const [urls, setUrls] = useState([]);
  const [urlWebView, setUrlWebView] = useState('https://www.nike.com');
  const [informationGrab, setInformationGrab] = useState(
    '2023 Nike, Inc. Wszelkie prawa zastrzeżone',
  );

  useEffect(() => {
    getWebsites().then((data) => {
      setUrls(data);
    });
  }, []);

  const {
    wrapper,
    textWrapper,
    siteWrapper,
    webViewWrapper,
    informationGrabWrapper,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={textWrapper}>
        <Text>Hello {email}</Text>
      </View>
      <View style={siteWrapper}>
        {urls &&
          urls.map(({url, name}) => (
            <View key={name} style={textWrapper}>
              <Text onPress={() => setUrlWebView(url)}>{url}</Text>
            </View>
          ))}
      </View>
      <View style={webViewWrapper}>
        <MainWebView uri={urlWebView} setInformationGrab={setInformationGrab} />
      </View>
      <View style={informationGrabWrapper}>
        <Text>{informationGrab}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListOfSitesScreen;
