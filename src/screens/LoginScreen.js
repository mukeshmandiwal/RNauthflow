import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useAuthorization} from '../components/AuthProvider';

const SignOut = ({navigation}) => {
  const {signOut} = useAuthorization();
  function navigateAuth() {
    signOut();
    navigation.navigate('Home');
  }
  return <Button title="Sign Out" onPress={navigateAuth} />;
};

export default LoginScreen = props => {
  const {status, authToken} = useAuthorization();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        authToken : {authToken ? authToken : 'null'}
      </Text>
      <View style={styles.actions}>
        <SignOut {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  detailsContainer: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    margin: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
});
