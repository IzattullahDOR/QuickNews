import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import BreakingNews from './components/BreakingNews';
import SavedNews from './components/SavedNews';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tuoreimmat" component={BreakingNews} />
        <Tab.Screen name="Tallennetut" component={SavedNews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}