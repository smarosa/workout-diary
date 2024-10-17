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
import UnitContext from './components/UnitContext';

const routes = [
  { key: 'addworkout', title: 'Add workout', focusedIcon: 'plus-box-outline' },
  { key: 'summary', title: 'Summary', focusedIcon: 'format-list-bulleted' },
  { key: 'settings', title: 'Settings', focusedIcon: 'settings-helper' }
]

export default function App() {

  const firstWorkouts = [
    { id: 1, category: 'run', distance: 5, duration: '30 mins', date: 'Tue Oct 1 2024' },
    { id: 2, category: 'bike', distance: 20, duration: '60 mins', date: 'Fri Oct 4 2024' },
  ];

  const [unit, setUnit] = useState('km'); //stores unit
  const [workout, setWorkout] = useState(firstWorkouts); //stores workouts
  const [navindex, setNavindex] = useState(0); //stores navigation

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
        <UnitContext.Provider value={{ unit, setUnit }}>
          <FontComponent>
            <BottomNavigation
              navigationState={{ index: navindex, routes }}
              onIndexChange={setNavindex}
              renderScene={renderScene}
            />
          </FontComponent>
        </UnitContext.Provider>
      </WorkoutContext.Provider>
    </PaperProvider>
  );
}