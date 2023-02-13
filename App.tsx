
/// <reference types="nativewind/types"/>;
import React from 'react';
import LanguageContext from './src/languages/languageContext';
import MainStack from './src/navigation/mainStack';

const App: React.FC = () => {
  return (
    <MainStack />
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