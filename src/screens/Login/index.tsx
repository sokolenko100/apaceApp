import React, {useCallback, FC} from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {useFormik} from 'formik';
import Button from '@components/Button';
import Input from '@components/Input';
import {validationSchema} from './validationSchema';
import {styles} from './styles';
import {getInputProps} from '@helpers/formik';
import {regexEmail, regexSpace} from '@helpers/regex';
import {navigateTo} from '@helpers/rootNavigation';
import CaptionText from '@components/CaptionText';

const pleaseSign = 'Please Sign In to proceed';
const initialValues = {email: '', password: ''};

/**
 * Login screen
 */
const Login: FC = () => {
  /**
   * Submit login
   */
  const onSubmit = useCallback(({email}) => {
    navigateTo('ListOfSitesScreen', {email});
  }, []);
  const {wrapper, loginDescription, container, inputSpace, submitButton} =
    styles;

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema, 
  });

  return (
    <SafeAreaView style={wrapper}>
      <Text style={loginDescription}>{pleaseSign}</Text>
      <KeyboardAvoidingView behavior="padding" style={container}>
        <View style={inputSpace}>
          <Input
            {...getInputProps(formik, 'email')}
            autoCapitalize="none"
            keyboardType="email-address"
            trimEnd={true}
            maxLength={100}
            forbiddenСharacters={regexEmail}
            caption={<CaptionText formik={formik} field={'email'} />}
          />
        </View>
        <View style={inputSpace}>
          <Input
            {...getInputProps(formik, 'password')}
            secureTextEntry={true}
            isPassword
            maxLength={50}
            forbiddenСharacters={regexSpace}
            trimEnd={true}
            trimStart={true}
            caption={<CaptionText formik={formik} field={'password'} />}
          />
        </View>
      </KeyboardAvoidingView>
      <Button
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
        label={'Login'}
        style={submitButton}
        isShowNoInternetModal={true}
      />
    </SafeAreaView>
  );
};

export default Login;
