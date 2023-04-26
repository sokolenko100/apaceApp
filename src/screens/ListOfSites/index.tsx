import {FC, useEffect, useState} from 'react';
import {styles} from './styles';
import {View, SafeAreaView, Text} from 'react-native';
import {getWebsites} from './helpers/GraphQLClient';
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
  const [urlWebView, setUrlWebView] = useState('');
  const [informationGrab, setInformationGrab] = useState('Hello world');


  useEffect(() => {
    getWebsites().then(data => {
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
        {urls.map(item => (
          <Text
            onPress = {() => {
              setUrlWebView(item);
            }}>
            {item}
          </Text>
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
