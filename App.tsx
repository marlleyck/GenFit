import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { AppContextProvider } from "./src/contexts/AppContext";
import Routes from "./src/routes";

import { useFonts, Roboto_300Light, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { TrainingContextProvider } from "./src/contexts/TrainingContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthContextProvider>
        <AppContextProvider>
          <TrainingContextProvider>
            <Routes />
          </TrainingContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </NavigationContainer>
  );
}
