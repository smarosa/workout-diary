import { FlatList, SafeAreaView, View } from "react-native";
import { Avatar, Card, IconButton, Surface, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import { useContext } from "react";
import WorkoutContext from "./WorkoutContext";
import UnitContext from "./UnitContext";

export default function SummaryPage() {

    const theme = useTheme();
    const { workout } = useContext(WorkoutContext);
    const { unit } = useContext(UnitContext);

    function convertDistance(distance) {
        return unit === 'miles' ? (distance * 0.621371).toFixed(0) : distance; //problem with toFixed
    }

    function calculateTotalDistance(category) {
        const totalDistance = workout
            .filter(item => item.category === category)
            .reduce((sum, item) => sum + parseFloat(item.distance), 0);
        return unit === 'miles' ? (totalDistance * 0.621371).toFixed(0) : totalDistance.toFixed(0);
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Workouts Summary</Text>
            <View style={Styles.distanceView}>
                <Surface style={Styles.surface} elevation={1}>
                    <IconButton icon="walk" size={30} />
                    <Text>{calculateTotalDistance('walk')}</Text>
                </Surface>
                <Surface style={Styles.surface} elevation={1}>
                    <IconButton icon="bike" size={30} />
                    <Text>{calculateTotalDistance('bike')}</Text>
                </Surface>
                <Surface style={Styles.surface} elevation={1}>
                    <IconButton icon="run" size={30} />
                    <Text>{calculateTotalDistance('run')}</Text>
                </Surface>
            </View>
            <FlatList
                data={workout}
                renderItem={({ item }) => (
                    <Item item={item} convertDistance={convertDistance} unit={unit} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );

    function Item({ item, convertDistance, unit }) {
        return (
            <Card style={[Styles.card, { backgroundColor: theme.colors.background, borderColor: theme.colors.secondary }]}>
                <Card.Title
                    titleVariant="titleMedium"
                    title={item.date}
                    left={props => <Avatar.Icon icon={item.category} size={40} />}
                />
                <Card.Content>
                    <Text>Distance: {convertDistance(item.distance)} {unit}</Text>
                    <Text>Duration: {item.duration}</Text>
                </Card.Content>
            </Card>
        );
    }
}