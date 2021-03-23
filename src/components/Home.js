import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {useAuthorization} from './AuthProvider';

const SignOutButton = () => {
  const {signOut} = useAuthorization();
  return <Button title="Sign Out" onPress={() => signOut('')} />;
};

const SignInButton = () => {
  const {signIn} = useAuthorization();
  return <Button title="Sign IN" onPress={() => signIn('my_token')} />;
};
export const Home = () => {
  const {status, userToken} = useAuthorization();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        userToken : {userToken ? userToken : 'null'}
      </Text>
      <View style={styles.actions}>
        <SignInButton />
        <SignOutButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
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
