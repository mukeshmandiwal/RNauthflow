import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAuthorization} from './AuthProvider';

const Stack = createStackNavigator();

const SignOutButton = ({navigation}) => {
  const {signOut} = useAuthorization();

  function navigateAuth() {
    signOut();
    navigation.navigate('Home');
  }
  return <Button title="Sign Out" onPress={navigateAuth} />;
};

const SignInButton = ({navigation}) => {
  const {signIn} = useAuthorization();
  function navigateHome() {
    signIn('my_token');
    navigation.navigate('Auth');
  }
  return <Button title="Sign IN" onPress={navigateHome} />;
};
export const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <SignInButton {...props} />
      </View>
    </View>
  );
};

export const LoginScreen = props => {
  const {status, userToken} = useAuthorization();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>status : {status}</Text>
      <Text style={styles.text}>
        userToken : {userToken ? userToken : 'null'}
      </Text>
      <View style={styles.actions}>
        <SignOutButton {...props} />
      </View>
    </View>
  );
};

export function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          initialRouteName="Auth"
          name="Auth"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
