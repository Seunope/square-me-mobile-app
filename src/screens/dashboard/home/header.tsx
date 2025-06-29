import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import BellIcon from "../../../assets/dashboard/bell";
import AddIcon from "../../../assets/dashboard/add";
import GiftIcon from "../../../assets/dashboard/gift";
import { colors, fonts, sizes } from "../../../utils/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/aloc-ng/image/upload/v1711706693/Groupay/Profile/itkxqfdzssu3jneghm66.jpg",
          }}
          style={styles.avatar}
        />
        <Text style={styles.greeting}>Hi David,</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          {/* <View style={styles.iconContainer}> */}
          <AddIcon />
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          {/* <View style={styles.iconContainer}> */}
          <GiftIcon />
          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <BellIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: sizes.md,
    paddingVertical: sizes.md,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  greeting: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.black[100],
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
