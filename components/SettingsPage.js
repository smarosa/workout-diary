import { SafeAreaView, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";

export default function SettingsPage(){

    const theme = useTheme();

    return(
        <SafeAreaView style={Styles.container}>
            <Text variant="headlineLarge" style={[Styles.header, {color: theme.colors.primary }]}>Settings</Text>
        </SafeAreaView>
    )
}