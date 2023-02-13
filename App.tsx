
/// <reference types="nativewind/types"/>
import React from 'react';
import LanguageContext from './src/languages/languageContext';
import StudentStackMain from './src/navigation/StudentMainStack';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  return (
    <NavigationContainer>

      <StudentStackMain/>
    </NavigationContainer>
  );
}


const defaultLanguage = 'en';
const MyApp= () => {
  return (
    <LanguageContext.Provider value={{ language: defaultLanguage }}>
      <App />
    </LanguageContext.Provider>
  );
};
export default MyApp;
