import { SafeAreaView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";

export default function SummaryPage(){

    const theme = useTheme();

    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.contentBox}>
            <Text variant="headlineLarge" style={[Styles.header, {color: theme.colors.primary }]}>Workout summary</Text>
            </View>
        </SafeAreaView>
    )
}