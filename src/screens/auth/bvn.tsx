import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Button from "../../components/Button";
import ShieldIcon from "../../assets/auth/shield";
import InputBar from "../../components/InputBar";
import { colors, fonts, sizes } from "../../utils/theme";
import { useNavigation } from "@react-navigation/native";
import BackArrowIcon from "../../assets/common/back-arrow";
import ArrowHeadUpIcon from "../../assets/auth/arrow-head-up";

export const BVNScreen = ({ onSubmit }) => {
  const [bvn, setBvn] = useState("");
  const navigation = useNavigation<any>();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.pop(1)}
        >
          <BackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Provide your BVN</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Kindly provide your Bank Verification Number
        </Text>

        <View style={styles.inputContainer}>
          <InputBar
            label="BVN"
            placeholder="Enter your BVN"
            value={bvn}
            onChangeText={setBvn}
          />
        </View>

        <TouchableOpacity
          style={styles.expandableCard}
          onPress={() => setIsExpanded(!isExpanded)}
        >
          <View style={styles.expandableHeader}>
            <ShieldIcon />
            <Text style={styles.expandableTitle}>Why we need your BVN?</Text>
            <ArrowHeadUpIcon />
          </View>

          {isExpanded && (
            <View style={styles.expandableContent}>
              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>
                  We request for your BVN to verify your identity and confirm
                  that the account you provided is yours.
                </Text>
              </View>

              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>
                  Only access to your full name, phone number and date of birth
                  is granted.
                </Text>
              </View>

              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>
                  Your BVN does not grant access to bank accounts or transaction
                  details.
                </Text>
              </View>

              <View style={styles.bulletPoint}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>
                  Rest assured, your data is securely managed by us.
                </Text>
              </View>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Button
          btnTxt="Verify"
          onPress={() =>
            navigation.navigate("AuthStack", {
              screen: "EmailOptIn",
            })
          }
        ></Button>
      </View>
    </SafeAreaView>
  );
};
export default BVNScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: sizes.md,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: sizes.md,
    paddingVertical: sizes.md,
    // justifyContent: "space-between",
  },
  backButton: {
    padding: sizes.xs,
    paddingLeft: 0,
    marginRight: sizes.md,
  },
  helpButton: {
    padding: 8,
  },
  brandName: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.blue[100],
    flex: 1,
    textAlign: "left",
  },
  title: {
    fontSize: sizes.lg,
    fontFamily: fonts.medium,
    color: colors.blue["90"],
    // marginBottom: sizes.xs,
    // flex: 1,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: sizes.lg,
  },
  footer: {
    paddingHorizontal: sizes.lg,
    paddingBottom: sizes["3xl"],
  },

  subtitle: {
    fontSize: sizes.md,
    fontFamily: fonts.regular,
    color: colors.blue["90"],
    lineHeight: 24,
    textAlign: "center",
    marginBottom: sizes["2xl"],
  },
  //PIN
  // BVN Screen Styles
  bvnInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  bvnInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  expandableCard: {
    backgroundColor: "#faf5ff",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  expandableHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  expandableTitle: {
    flex: 1,
    fontSize: sizes.md,
    fontFamily: fonts.medium,
    color: colors.purple[100],
    marginLeft: sizes.xs,
  },
  expandableContent: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#6b7280",
    marginTop: 6,
    marginRight: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: sizes.sm,
    fontFamily: fonts.regular,
    color: colors.gray[100],
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#9ca3af",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
