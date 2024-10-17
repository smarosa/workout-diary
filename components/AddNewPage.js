import { useContext, useState } from "react";
import { SafeAreaView, View, Alert } from "react-native";
import { Button, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import WorkoutContext from "./WorkoutContext";
import UnitContext from "./UnitContext";

const categories = ['walk', 'bike', 'run'];
//let workoutId = 0;

export default function AddNewPage() {

    const [category, setCategory] = useState(categories[0]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const theme = useTheme();
    const { workout, setWorkout } = useContext(WorkoutContext);
    const { unit } = useContext(UnitContext);

    const handleDistanceChange = (text) => {
        // Check if input is empty
        if (text === '') { 
            setDistance(text);
            return;
        }
        // Convert to number
        const distanceValue = Number(text);

        // Check if negative number
        if (distanceValue < 0) {
            Alert.alert("Invalid input", "Only use positive numbers, please.");
        } else {
            setDistance(text); // Set new value if valid
        }
    };
    const handleDurationChange = (text) => {
        // Check if input is empty
        if (text === '') { 
            setDuration(text);
            return;
        }
        // Convert to number
        const durationValue = Number(text);

        // Check if negative number
        if (durationValue < 0) {
            Alert.alert("Invalid input", "Only use positive numbers, please.");
        } else {
            setDuration(text); // Set new value if valid
        }
    };


    function addWorkout() {
        //const id = workoutId++;
        const id = Date.now();
        const date = new Date();
        
        // change unit
        const convertedDistance = unit === 'miles' ? (distance / 0.621371) : distance;

        const durationWithUnit = duration + ' mins';

        const modified = [...workout, {
            id,
            category,
            distance: convertedDistance, //numerical value
            duration: durationWithUnit, //string
            date: date.toDateString()
        }];
        setWorkout(modified);
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Add Workout</Text>
            <CategorySelection value={category} setValue={setCategory} values={categories} />
            <TextInput
            label={`Distance (${unit})`}
            mode="outlined"
            style={Styles.textInput}
            value={distance}
            onChangeText={handleDistanceChange}
            //onChangeText={setDistance}
            keyboardType="numeric"
            />
            <TextInput
            label={'Duration (min)'}
            mode="outlined"
            style={Styles.textInput}
            value={duration}
            onChangeText={handleDurationChange}
            //onChangeText={setDuration}
            keyboardType="numeric"
            />
            <Button mode="contained" style={Styles.buttonAdd} onPress={addWorkout}>Add new workout</Button>
        </SafeAreaView>
    )
}

function CategorySelection({ value, setValue, values }) {

    const theme = useTheme();

    return (
        <View style={Styles.categories}>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={values.map(v => ({
                    value: v,
                    icon: v,
                    style: { backgroundColor: v == value ? theme.colors.primary : null }
                }))}
            />
        </View>
    );
}