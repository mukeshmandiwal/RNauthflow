import AsyncStorage from '@react-native-community/async-storage';
export async function getItem(key) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function setItem(value) {
  return AsyncStorage.setItem('token', JSON.stringify(value));
}
export async function removeItem() {
  return AsyncStorage.removeItem('token');
}
