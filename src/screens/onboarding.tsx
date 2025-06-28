import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import Button from "../components/Button";
import React, { useState, useRef } from "react";
import { verticalScale } from "../utils/scaling";
import { fonts, colors, sizes } from "../utils/theme";
import { PageIndicatorProps } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
const { width: screenWidth } = Dimensions.get("window");

const PageIndicator = ({ currentPage, totalPages }: PageIndicatorProps) => {
  return (
    <View style={styles.indicatorContainer}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            currentPage === index
              ? styles.activeIndicator
              : styles.inactiveIndicator,
          ]}
        />
      ))}
    </View>
  );
};

const OnboardingSlider = () => {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation<any>();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      backgroundColor: "#0891B2", // Cyan
      title: "Spend your money easily without any complications",
      subtitle: "Receive funds sent to you in seconds.",
      content: (
        <View style={styles.pageContainer}>
          <Image
            source={require("../assets/on-boarding/wallet-slide.png")}
            style={styles.imageContainer}
          />
        </View>
      ),
    },
    {
      backgroundColor: "#9333EA", // Purple
      title: "A virtual USD card for your payments",
      subtitle: "Shop globally. Renew your subscriptions with ease.",
      content: (
        <View style={styles.pageContainer}>
          <Image
            source={require("../assets/on-boarding/payment-slide.png")}
            style={styles.imageContainer}
          />
        </View>
      ),
    },
    {
      backgroundColor: "#2563EB", // Blue
      title: "A super secure way to pay your bills",
      subtitle: "Pay your bills with the cheapest rates in town.",
      content: (
        <View style={styles.pageContainer}>
          <Image
            source={require("../assets/on-boarding/virtual-card.png")}
            style={styles.imageContainer}
          />
        </View>
      ),
    },
  ];

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentPage(index);
  };

  const currentPageData = pages[currentPage];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* Background with solid color instead of gradient */}
      <View
        style={[
          styles.backgroundSolid,
          { backgroundColor: currentPageData.backgroundColor },
        ]}
      >
        {/* Subtle gradient effect using opacity overlays */}
        <View style={[styles.gradientOverlay, styles.gradientTop]} />
        <View style={[styles.gradientOverlay, styles.gradientBottom]} />
      </View>

      {/* Content ScrollView */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.page}>
            <View style={styles.contentContainer}>{page.content}</View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <PageIndicator currentPage={currentPage} totalPages={pages.length} />

        <View style={styles.textSection}>
          <Text style={styles.title}>{currentPageData.title}</Text>
          <Text style={styles.subtitle}>{currentPageData.subtitle}</Text>
        </View>

        <View style={styles.buttonSection}>
          <Button
            btnTxt="Create an account"
            onPress={() =>
              navigation.navigate("AuthStack", {
                screen: "SignUp",
              })
            }
          ></Button>
          <Button
            outline={true}
            btnTxt=" I already have an account"
            onPress={() =>
              navigation.navigate("AuthStack", {
                screen: "LogIn",
              })
            }
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    width: verticalScale(340),
    height: verticalScale(350),
    // marginBottom: 24,
  },
  pageContainer: {
    position: "relative",
    alignItems: "center",
  },
  backgroundSolid: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "60%",
  },
  gradientOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "50%",
  },
  gradientTop: {
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  gradientBottom: {
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  scrollView: {
    flex: 1,
  },
  page: {
    width: screenWidth,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  // Page Content Styles
  pageContent: {
    flex: 1,
    paddingTop: 16,
  },
  pageHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 20,
  },

  // Bottom Section Styles
  bottomSection: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 16,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 32,
  },
  indicator: {
    width: 32,
    height: sizes["2xs"],
    borderRadius: sizes.sm,
    marginHorizontal: sizes["2xs"],
  },
  activeIndicator: {
    backgroundColor: colors.blue[90],
  },
  inactiveIndicator: {
    backgroundColor: colors.gray[90],
  },
  textSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.semiBold,
    color: colors.blue[90],
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fonts.regular,

    textAlign: "center",
  },
  buttonSection: {
    gap: 12,
  },
});

export default OnboardingSlider;
