import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './AppNavigator/AppNavigation'; // Import the navigator

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator /> 
    </>
  );
}
