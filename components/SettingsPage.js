import { SafeAreaView, View } from "react-native";
import { RadioButton, Text, useTheme } from "react-native-paper";
import Styles from "../styles/Styles";
import UnitContext from "./UnitContext";
import { useContext } from "react";

export default function SettingsPage() {

    const { unit, setUnit } = useContext(UnitContext);
    const theme = useTheme();

    return (
        <SafeAreaView style={Styles.container}>
            <View>
                <Text variant="headlineLarge" style={[Styles.header, { color: theme.colors.primary }]}>Settings</Text>
                <RadioButton.Group value={unit} onValueChange={value => setUnit(value)}>
                    <View style={[Styles.settingsView, { backgroundColor: theme.colors.background, borderColor: theme.colors.secondary }]}>
                        <Text style={Styles.optionsText}>Choose unit for distance</Text>
                        <RadioButton.Item label="Kilometres" value="km" />
                        <RadioButton.Item label="Miles" value="miles" />
                    </View>
                </RadioButton.Group>
            </View>
        </SafeAreaView>
    )
}