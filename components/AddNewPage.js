import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { SegmentedButtons, Text, TextInput, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";

const categories = ['walk', 'bike', 'run'];

export default function AddNewPage() {

    const [category, setCategory] = useState(categories[0]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const theme = useTheme();

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.contentBox}>
            <Text variant="headlineLarge" style={[Styles.header, {color: theme.colors.primary }]}>Add new workout</Text>
            <CategorySelection value={category} setValue={setCategory} values={categories} />
            <TextInput mode="flat" style={Styles.textInput} value={distance} onChangeText={setDistance}/>
            <TextInput mode="flat" style={Styles.textInput} value={duration} onChangeText={setDuration}/>
            </View>
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
                    style: {backgroundColor: v == value ? theme.colors.primary : null}
                }))}
            />
        </View>
    );
}