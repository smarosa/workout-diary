import { FlatList, SafeAreaView, View } from "react-native";
import { Avatar, Card, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import WorkoutContext from "./WorkoutContext";
import UnitContext from "./UnitContext";

export default function SummaryPage() {

    const theme = useTheme();
    const { workout } = useContext(WorkoutContext);
    const { unit } = useContext(UnitContext);

    function convertDistance(distance) {
        return unit === 'miles' ? (distance * 0.621371).toFixed(2) : distance;
    }

    return (
        <SafeAreaView style={Styles.container}>
                <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Workouts Summary</Text>
                <FlatList 
                    data = {workout}
                    renderItem={({ item }) => (
                        <Item item = {item} convertDistance={convertDistance} unit={unit} />
                    )}
                    keyExtractor = {item => item.id.toString()}
                />
        </SafeAreaView>
    );
}

function Item({ item, convertDistance, unit }) {
    return (
        <Card style={Styles.card}>
            <Card.Title
            titleVariant="titleMedium"
            title={ item.date }
            left={props => <Avatar.Icon icon={item.category} size={40}/>}
            />
            <Card.Content>
                <Text>Distance: {convertDistance(item.distance)} {unit}</Text>
                <Text>Duration: {item.duration}</Text>
            </Card.Content>
        </Card>
    );
}