import { FlatList, SafeAreaView, View } from "react-native";
import { Avatar, Card, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import WorkoutContext from "./WorkoutContext";

export default function SummaryPage() {

    const theme = useTheme();
    const { workout } = useContext(WorkoutContext);

    return (
        <SafeAreaView style={Styles.container}>
                <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Workouts Summary</Text>
                <FlatList 
                    data = {workout}
                    renderItem = {Item}
                    keyExtractor = {item => item.id}
                />
        </SafeAreaView>
    );
}

function Item({ item }) {
    return (
        <Card style={Styles.card}>
            <Card.Title
            titleVariant="titleMedium"
            title={ item.date }
            left={props => <Avatar.Icon icon={item.category} size={40}/>}
            />
            <Card.Content>
                <Text>Distance: {item.distance}</Text>
                <Text>Duration: {item.duration}</Text>
            </Card.Content>
        </Card>
    );
}