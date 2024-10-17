import { useContext, useState } from "react";
import { SafeAreaView, View, Alert, Modal, Pressable } from "react-native";
import { Button, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import WorkoutContext from "./WorkoutContext";
import UnitContext from "./UnitContext";
import { Calendar } from "react-native-calendars";

const categories = ['walk', 'bike', 'run'];
//let workoutId = 0;

export default function AddNewPage() {

    const [category, setCategory] = useState(categories[0]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const { workout, setWorkout } = useContext(WorkoutContext);
    const { unit } = useContext(UnitContext);

    const handleDistanceChange = (text) => {
        // Convert input to number
        const distanceValue = Number(text);

        // Check if input is empty, not a number, or a negative number
        if (text === '' || isNaN(distanceValue) || distanceValue < 0) {
            Alert.alert("Invalid input", "Only use positive numbers, please.");
        } else {
            setDistance(text); // Set new value if valid
        }
    };

    const handleDurationChange = (text) => {
        // Convert input to number
        const durationValue = Number(text);

        // Check if input is empty, not a number, or a negative number
        if (text === '' || isNaN(durationValue) || durationValue < 0) {
            Alert.alert("Invalid input", "Only use positive numbers, please.");
        } else {
            setDuration(text); // Set new value if valid
        }
    };

    function dateSelected(day) {
        setVisible(false);
        setDate(day);
    };

    function addWorkout() {
        const id = Date.now();
        //const date = new Date();
        const convertedDistance = unit === 'miles' ? (distance / 0.621371) : distance;
        const durationWithUnit = duration + ' mins';

        const workoutDate = date ? date.dateString : new Date().toDateString();

        const modified = [...workout, {
            id,
            category,
            distance: convertedDistance, //numerical value
            duration: durationWithUnit, //string
            date: workoutDate
        }];
        setWorkout(modified);

        setCategory(categories[0]);
        setDistance('');
        setDuration('');
        setDate(null);
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
            />
            <TextInput
                label={'Duration (min)'}
                mode="outlined"
                style={Styles.textInput}
                value={duration}
                onChangeText={handleDurationChange}
            />
            <View style={[Styles.calendarView, { backgroundColor: theme.colors.background, borderColor: theme.colors.secondary }]}>
                <Modal visible={visible} transparent={true}>
                    <Calendar style={Styles.calendar} onDayPress={dateSelected} />
                </Modal>
                <Pressable onPress={() => setVisible(true)}>
                    <Text style={[{ fontSize: 20 }, { color: theme.colors.secondary }]}>{date ? date.dateString : 'Select date'}</Text>
                </Pressable>
            </View>
            <Button mode="contained" style={Styles.buttonAdd} onPress={addWorkout}>ADD NEW WORKOUT</Button>
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