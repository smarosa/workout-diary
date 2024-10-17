import { useContext, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Button, SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import WorkoutContext from "./WorkoutContext";

const categories = ['walk', 'bike', 'run'];
let workoutId = 0;

export default function AddNewPage() {

    const [category, setCategory] = useState(categories[0]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const theme = useTheme();
    const {workout, setWorkout} = useContext(WorkoutContext);

    function addWorkout(){
        const id = workoutId++;
        const date = new Date();
        const modified = [...workout, {id, category, distance, duration, date: date.toDateString()}];
        setWorkout(modified);
    }

    return (
        <SafeAreaView style={Styles.container}>
                <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Add Workout</Text>
                <CategorySelection value={category} setValue={setCategory} values={categories} />
                <TextInput label={'Distance'} mode="outlined" style={Styles.textInput} value={distance} onChangeText={setDistance} />
                <TextInput label={'Duration'} mode="outlined" style={Styles.textInput} value={duration} onChangeText={setDuration} />
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