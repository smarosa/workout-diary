import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './styles/Styles';
import { BottomNavigation, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import WorkoutContext from './components/WorkoutContext';
import AddNewPage from './components/AddNewPage';
import SummaryPage from './components/SummaryPage';
import SettingsPage from './components/SettingsPage';
import FontComponent from './components/FontComponent';

const routes = [
  { key: 'addworkout', title: 'Add workout', focusedIcon: 'plus-box-outline' },
  { key: 'summary', title: 'Summary', focusedIcon: 'format-list-bulleted' },
  { key: 'settings', title: 'Settings', focusedIcon: 'settings-helper' }
]

export default function App() {

  const [workout, setWorkout] = useState([]);
  const [navindex, setNavindex] = useState(0);
  
  console.log(workout); //check input getting added

  const WorkoutTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#d4115c',
    },
  };

  const renderScene = BottomNavigation.SceneMap({
    addworkout: AddNewPage,
    summary: SummaryPage,
    settings: SettingsPage
  });

  return (
    <PaperProvider theme={WorkoutTheme}>
      <WorkoutContext.Provider value={{ workout, setWorkout }}>
        <FontComponent>
        <BottomNavigation
          navigationState={{ index: navindex, routes }}
          onIndexChange={setNavindex}
          renderScene={renderScene}
        />
        </FontComponent>
      </WorkoutContext.Provider>
    </PaperProvider>
  );
}