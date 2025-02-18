import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorage = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
  return JSON.stringify(value);
};

export const getLocalStorage = async (key: string) => {
  const result = await AsyncStorage.getItem(JSON.parse(key));
  return result;
};

export const removeLocalStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
