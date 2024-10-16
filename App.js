import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './styles/Styles';
import { BottomNavigation, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import WorkoutContext from './components/WorkoutContext';
import AddNewPage from './components/AddNewPage';
import SummaryPage from './components/SummaryPage';
import SettingsPage from './components/SettingsPage';

const routes = [
  { key: 'addworkout', title: 'Add workout', focusedIcon: 'plus-box-outline' },
  { key: 'summary', title: 'Summary', focusedIcon: 'format-list-bulleted' },
  { key: 'settings', title: 'Settings', focusedIcon: 'settings-helper' }
]

export default function App() {

  const [workout, setWorkout] = useState([]);
  const [navindex, setNavindex] = useState(0);

  const WorkoutTheme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#ec1367',
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
        <BottomNavigation
          navigationState={{ index: navindex, routes }}
          onIndexChange={setNavindex}
          renderScene={renderScene}
        />
      </WorkoutContext.Provider>
    </PaperProvider>
  );
}

