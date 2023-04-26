import React, {useCallback} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useFormik} from 'formik';
import Button from '@components/Button';
import Input from '@components/Input';
import {validationSchema} from './validationSchema';
import {styles} from './styles';
import {getInputProps} from '@helpers/formik';
import {loginAction} from './redux/actionCreators';
import {useDispatch} from 'react-redux';
import {regexEmail, regexSpace} from '@helpers/regex';
import {navigateTo} from '@helpers/rootNavigation';

const pleaseSign = 'Please Sign In to proceed';
const initialValues = {email: '', password: ''};
/**
 * Login screen
 * @constructor
 */
const Login = () => {
  const dispatch = useDispatch();

  /**
   * Submit login
   */
  const onSubmit = useCallback(
    ({email, password}) => {
      navigateTo('ListOfSitesScreen', {email});

      dispatch(
        loginAction({
          email,
          password,
        }),
      );
    },
    [dispatch],
  );

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.loginDescription}>{pleaseSign}</Text>
      <View style={styles.container}>
        <View style={styles.inputSpace}>
          <Input
            {...getInputProps(formik, 'Email')}
            autoCapitalize="none"
            keyboardType="email-address"
            trimEnd={true}
            maxLength={100}
            forbiddenСharacters={regexEmail}
          />
        </View>
        <View style={styles.inputSpace}>
          <Input
            {...getInputProps(formik, 'Password')}
            secureTextEntry={true}
            isPassword
            maxLength={50}
            forbiddenСharacters={regexSpace} 
            trimEnd={true}
            trimStart={true}
          />
        </View>
      </View>
      <Button
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
        label={'Login'}
        style={styles.submitButton}
        isShowNoInternetModal={true}
      />
    </SafeAreaView>
  );
};

export default Login;
