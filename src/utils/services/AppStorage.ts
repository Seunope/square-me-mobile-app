import SInfo from "react-native-sensitive-info";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AppStorage {
  constructor() {}

  static saveData = async (param: string, value: string) => {
    if (!param || !value) {
      return false;
    }
    try {
      await AsyncStorage.setItem(param, JSON.stringify(value));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  static saveToken = async (token: string, expireInMinutes: number) => {
    try {
      const now = new Date();
      let expireTime = new Date(now);

      await AsyncStorage.setItem(
        "expireAt",
        JSON.stringify(
          expireTime.setMinutes(now.getMinutes() + expireInMinutes)
        )
      );
      await AsyncStorage.setItem("token", JSON.stringify(token));

      // await SInfo.setItem("token", JSON.stringify(token), {
      //   sharedPreferencesName: "xSharedPref",
      //   keychainService: "xKeyChain",
      // });
    } catch (e) {
      console.log("storage err", e);
    }
  };

  static getToken = async () => {
    let value = null;
    try {
      // const data = await SInfo.getItem("token", {
      //   sharedPreferencesName: "xSharedPref",
      //   keychainService: "xKeyChain",
      // });
      const data = (await AsyncStorage.getItem("token")) as string;
      value = JSON.parse(data);
    } catch (e) {
      // console.log("sensitive-info err", e);
    }
    return value;
  };

  static deleteToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      // await SInfo.deleteItem("token", {
      //   sharedPreferencesName: "xSharedPref",
      //   keychainService: "xKeyChain",
      // });
    } catch (e) {
      // console.log("sensitive-info err", e);
      return false;
    }

    return true;
  };

  static getData = async (param: string) => {
    let value = null;
    if (!param) {
      return value;
    }
    try {
      const data = (await AsyncStorage.getItem(param)) as string;
      value = JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
    return value;
  };

  static deleteData = async (param: string) => {
    let value = null;
    if (!param) {
      return value;
    }
    try {
      value = (await AsyncStorage.removeItem(param)) as unknown;
    } catch (e) {}
    return value;
  };

  static ClearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  };
}
