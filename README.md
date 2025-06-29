# 📱 React Native Interview Project

A React Native mobile app built as part of a take-home technical interview. This project demonstrates core app flows like onboarding, authentication, dashboard access, and state management using Redux.

---

## ✨ Features Implemented

- ✅ Splash screen
- ✅ Onboarding screen
- ✅ Login screen
- ✅ Sign-up screen
- ✅ Phone verification
- ✅ PIN verification
- ✅ Email verification
- ✅ BVN verification
- ✅ Success confirmation screen
- ✅ Dashboard screen (post-auth)
- ✅ Profile screen
- ✅ Redux Toolkit for state management
- ✅ API structure with Axios (mock server only planned)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18.x
- [Yarn](https://yarnpkg.com/) or npm

### 📦 Installation

```bash
git clone https://github.com/seunope/square-me-app.git
cd square-me-app
yarn install # or npm install
```  

### ▶️ Running the App
yarn android

### 🏗️ Architecture Choices

-Feature-based folder structure (/screens, /components, /reduz, /services /api)

-Redux Toolkit for global state and async logic

-Axios wrapper for centralized API calls

-Persisted auth state using redux-persist

-Separation of concerns across UI, logic, and services

### 🧠 State Management Strategy

-Centralized state using Redux Toolkit

-Session & auth persisted with redux-persist

-Feature-specific slices for scalability (authSlice, userSlice)

-Local state for transient UI states (e.g., form inputs)

### ⚖️ Trade-offs & Known Limitations

    ❌ API not connected to real/mock server

    ❌ No form validation yet (intended: Yup or Zod)

    ❌ Minimal error handling & no toast/feedback alerts

    ❌ UI not yet optimized for all screen sizes

    ❌ No test coverage included

### 🚧 What I'd Improve With More Time

    Full API integration with mock data

    Implement proper form validation & UX feedback

    Add unit and integration tests (Jest + React Native Testing Library)

    Improve accessibility and screen responsiveness

    Add loading, error, and success states throughout the flow

    Dark mode / theme support

### 🙏 Thanks

Thank you for taking the time to review this project. Looking forward to your feedback and suggestions!