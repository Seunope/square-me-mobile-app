import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  StatusBar,
} from "react-native";
import Button from "../components/Button";

const { width: screenWidth } = Dimensions.get("window");

// Reusable Button Components
const PrimaryButton = ({ onPress, children, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.primaryButton, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.primaryButtonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({ onPress, children, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.secondaryButton, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.secondaryButtonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

// Page Indicator Component
const PageIndicator = ({ currentPage, totalPages }) => {
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

// Mock Phone Component
const MockPhone = ({ children, backgroundColor = "#FFFFFF" }) => {
  return (
    <View style={[styles.mockPhone, { backgroundColor }]}>
      {/* Phone Notch */}
      <View style={styles.phoneNotch} />

      {/* Status Bar */}
      <View style={styles.phoneStatusBar}>
        <Text style={styles.phoneTime}>9:41</Text>
        <View style={styles.phoneSignals}>
          <Text style={styles.phoneSignal}>•••</Text>
          <Text style={styles.phoneSignal}>📶</Text>
          <Text style={styles.phoneSignal}>🔋</Text>
        </View>
      </View>

      {/* Phone Content */}
      <View style={styles.phoneContent}>{children}</View>
    </View>
  );
};

// Virtual Card Component (using solid color instead of gradient)
const VirtualCard = () => {
  return (
    <View style={styles.virtualCard}>
      {/* Gradient effect using overlapping views */}
      <View style={styles.cardGradientOverlay} />

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Virtual Card</Text>
          <Text style={styles.cardBrand}>squareme</Text>
        </View>

        <Text style={styles.cardBalance}>$50000.00</Text>
        <Text style={styles.cardHolder}>John Wayne</Text>

        {/* Mastercard circles */}
        <View style={styles.mastercardContainer}>
          <View
            style={[styles.mastercardCircle, { backgroundColor: "#FF5F00" }]}
          />
          <View
            style={[
              styles.mastercardCircle,
              { backgroundColor: "#EB001B", marginLeft: -8 },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

// Card Actions Component
const CardActions = () => {
  const actions = [
    { name: "Top up card", icon: "+" },
    { name: "Freeze card", icon: "❄️" },
    { name: "Delete card", icon: "🗑️" },
  ];

  return (
    <View style={styles.cardActionsContainer}>
      {actions.map((action, index) => (
        <View key={index} style={styles.cardAction}>
          <View style={styles.cardActionIcon}>
            <Text style={styles.cardActionIconText}>{action.icon}</Text>
          </View>
          <Text style={styles.cardActionText}>{action.name}</Text>
        </View>
      ))}
    </View>
  );
};

// Bill Categories Component
const BillCategories = () => {
  const categories = [
    { name: "Airtime Recharge", icon: "📱", color: "#E6F3FF" },
    { name: "Betting", icon: "🎲", color: "#E6FFFA" },
    { name: "Cable Tv", icon: "📺", color: "#F3E8FF" },
    { name: "Data Subscription", icon: "📶", color: "#E0F7FA" },
    { name: "Utility Bills", icon: "📍", color: "#FFF3E0" },
  ];

  return (
    <View style={styles.billCategoriesContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.billCategory, { backgroundColor: category.color }]}
          activeOpacity={0.7}
        >
          <Text style={styles.billCategoryIcon}>{category.icon}</Text>
          <Text style={styles.billCategoryText}>{category.name}</Text>
          <Text style={styles.billCategoryArrow}>›</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Wallet Balance Component (using solid color instead of gradient)
const WalletBalance = () => {
  return (
    <View style={styles.walletBalance}>
      {/* Gradient effect using overlapping views */}
      <View style={styles.walletGradientOverlay} />

      <View style={styles.walletContent}>
        <Text style={styles.walletTag}>Squareme tag @davidkingcee2</Text>
        <Text style={styles.walletLabel}>Wallet Balance ₦</Text>
        <Text style={styles.walletAmount}>NGN 500,000.00</Text>
        <Text style={styles.walletBank}>Providus Bank/ 1234567890 📋</Text>
      </View>
    </View>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const actions = [
    { name: "Fund Wallet", icon: "💰", color: "#DBEAFE" },
    { name: "Withdraw", icon: "💸", color: "#F3E8FF" },
    { name: "Pay Bills", icon: "📄", color: "#E0F2FE" },
    { name: "Cards", icon: "💳", color: "#F0F9FF" },
  ];

  return (
    <View style={styles.quickActionsContainer}>
      {actions.map((action, index) => (
        <TouchableOpacity
          key={index}
          style={styles.quickAction}
          activeOpacity={0.7}
        >
          <View
            style={[styles.quickActionIcon, { backgroundColor: action.color }]}
          >
            <Text style={styles.quickActionIconText}>{action.icon}</Text>
          </View>
          <Text style={styles.quickActionText}>{action.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Transfer Notifications Component
const TransferNotifications = () => {
  return (
    <>
      <View style={[styles.transferNotification, { top: -40, left: 20 }]}>
        <Text style={styles.transferText}>Transfer to John Williams</Text>
        <Text style={styles.transferAmount}>₦5000</Text>
      </View>
      <View style={[styles.transferNotification, { top: -20, right: 20 }]}>
        <Text style={styles.transferText}>Transfer to John Williams</Text>
        <Text style={styles.transferAmount}>₦5000</Text>
      </View>
    </>
  );
};

const OnboardingSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);

  const pages = [
    {
      backgroundColor: "#9333EA", // Purple
      title: "A virtual USD card for your payments",
      subtitle: "Shop globally. Renew your subscriptions with ease.",
      content: (
        <MockPhone>
          <View style={styles.pageContent}>
            <Text style={styles.pageHeader}>← Cards</Text>
            <VirtualCard />
            <CardActions />
            <View style={styles.cardDetailsSection}>
              <Text style={styles.cardDetailsText}>Card Details</Text>
              <TouchableOpacity>
                <Text style={styles.showAllText}>Show all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </MockPhone>
      ),
    },
    {
      backgroundColor: "#2563EB", // Blue
      title: "A super secure way to pay your bills",
      subtitle: "Pay your bills with the cheapest rates in town.",
      content: (
        <MockPhone>
          <View style={styles.pageContent}>
            <Text style={styles.pageHeader}>← Pay Bills</Text>
            <Text style={styles.sectionTitle}>Bill Categories</Text>
            <BillCategories />
          </View>
        </MockPhone>
      ),
    },
    {
      backgroundColor: "#0891B2", // Cyan
      title: "Spend your money easily without any complications",
      subtitle: "Receive funds sent to you in seconds.",
      content: (
        <View style={styles.thirdPageContainer}>
          <TransferNotifications />
          <MockPhone>
            <View style={styles.pageContent}>
              <View style={styles.userGreeting}>
                <View style={styles.userAvatar} />
                <Text style={styles.greetingText}>Hi David,</Text>
                <TouchableOpacity style={styles.notificationBell}>
                  <Text>🔔</Text>
                </TouchableOpacity>
              </View>
              <WalletBalance />
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <QuickActions />
            </View>
          </MockPhone>
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
      <StatusBar barStyle="light-content" />

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
          <PrimaryButton onPress={() => console.log("Create account")}>
            Create an account
          </PrimaryButton>
          <Button
            btnTxt="Create an account"
            onPress={() => console.log("Create account")}
          ></Button>
          <SecondaryButton
            onPress={() => console.log("I already have an account")}
          >
            I already have an account
          </SecondaryButton>
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

  // Mock Phone Styles
  mockPhone: {
    width: 280,
    height: 520,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    overflow: "hidden",
  },
  phoneNotch: {
    position: "absolute",
    top: 8,
    left: "50%",
    marginLeft: -60,
    width: 120,
    height: 24,
    backgroundColor: "#000000",
    borderRadius: 12,
    zIndex: 10,
  },
  phoneStatusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 8,
  },
  phoneTime: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  phoneSignals: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneSignal: {
    marginLeft: 4,
    fontSize: 12,
  },
  phoneContent: {
    flex: 1,
    paddingHorizontal: 16,
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

  // Virtual Card Styles (simulating gradient with layers)
  virtualCard: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    marginBottom: 24,
    position: "relative",
    backgroundColor: "#7C3AED",
    overflow: "hidden",
  },
  cardGradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(156, 63, 209, 0.3)",
  },
  cardContent: {
    flex: 1,
    padding: 16,
    position: "relative",
    zIndex: 1,
  },
  cardHeader: {
    marginBottom: 8,
  },
  cardLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.8,
  },
  cardBrand: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.8,
    marginTop: 2,
  },
  cardBalance: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  cardHolder: {
    color: "#FFFFFF",
    fontSize: 8,
    opacity: 0.8,
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  mastercardContainer: {
    position: "absolute",
    right: 16,
    top: 16,
    flexDirection: "row",
  },
  mastercardCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    opacity: 0.8,
  },

  // Card Actions Styles
  cardActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  cardAction: {
    alignItems: "center",
  },
  cardActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cardActionIconText: {
    fontSize: 16,
  },
  cardActionText: {
    fontSize: 12,
    color: "#666666",
    textAlign: "center",
  },

  // Card Details Section
  cardDetailsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDetailsText: {
    fontSize: 14,
    color: "#000000",
  },
  showAllText: {
    fontSize: 12,
    color: "#6B7280",
  },

  // Bill Categories Styles
  sectionTitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  billCategoriesContainer: {
    width: "100%",
  },
  billCategory: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  billCategoryIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  billCategoryText: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
  },
  billCategoryArrow: {
    fontSize: 16,
    color: "#999999",
  },

  // Wallet Balance Styles (simulating gradient with layers)
  walletBalance: {
    width: "100%",
    borderRadius: 12,
    marginBottom: 24,
    position: "relative",
    backgroundColor: "#1E40AF",
    overflow: "hidden",
  },
  walletGradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(59, 130, 246, 0.3)",
  },
  walletContent: {
    padding: 16,
    position: "relative",
    zIndex: 1,
  },
  walletTag: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 8,
  },
  walletLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 4,
  },
  walletAmount: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  walletBank: {
    color: "#FFFFFF",
    fontSize: 8,
    opacity: 0.8,
  },

  // Quick Actions Styles
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  quickAction: {
    alignItems: "center",
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  quickActionIconText: {
    fontSize: 16,
  },
  quickActionText: {
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
  },

  // User Greeting Styles
  userGreeting: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#D1D5DB",
    marginRight: 8,
  },
  greetingText: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
  },
  notificationBell: {
    padding: 4,
  },

  // Transfer Notifications Styles
  thirdPageContainer: {
    position: "relative",
    alignItems: "center",
  },
  transferNotification: {
    position: "absolute",
    width: 120,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  transferText: {
    fontSize: 8,
    color: "#000000",
  },
  transferAmount: {
    fontSize: 8,
    color: "#666666",
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
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#1E40AF",
  },
  inactiveIndicator: {
    backgroundColor: "#D1D5DB",
  },
  textSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
  },
  buttonSection: {
    gap: 12,
  },

  // Button Styles
  primaryButton: {
    backgroundColor: "#1E40AF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#1E40AF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#1E40AF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OnboardingSlider;
