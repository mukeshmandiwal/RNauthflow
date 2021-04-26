import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getItem() {
  const value = await AsyncStorage.getItem('token');
  return value ? JSON.parse(value) : null;
}
export async function setItem(value) {
  return AsyncStorage.setItem('token', JSON.stringify(value));
}
export async function removeItem() {
  return AsyncStorage.removeItem('token');
}
