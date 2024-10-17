import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f1f4',
        alignItems: 'stretch',
        justifyContent: "center",
        padding: 10,
        marginTop: Constants.statusBarHeight + 10
    },
    header: {
        textAlign: "center",
        fontFamily: 'Nunito',
        marginTop: 20,
        marginBottom: 20
    },
    categories: {
        justifyContent: "center",
        margin: 10,
        marginTop: 6,
        marginBottom: 6
    },
    textInput: {
        margin: 10,
        marginTop: 6,
        marginBottom: 6
    },
    calendarView: {
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10
    },
    calendar: {
        borderWidth: 2
    },
    buttonAdd: {
        borderRadius: 50,
        margin: 10,
        marginTop: 12,
        marginBottom: 40,
        padding: 20
    },
    distanceView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    surface: {
        flex: 0.32,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        margin: 2,
        padding: 1,
    },
    card: {
        borderWidth: 1,
        margin: 10,
    },
    settingsView: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 40,
        padding: 20,
    },
    optionsText: {
        fontSize: 20,
        padding: 10,
    },
});

export default Styles;

//Colors: '#f6f1f4', '#d4115c'