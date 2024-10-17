import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff0',
        alignItems: 'stretch',
        justifyContent: "center",
        padding: 10,
        marginTop: Constants.statusBarHeight + 10
    },
    header: {
        textAlign: "center",
        fontFamily: 'Nunito',
        marginTop: 40,
        marginBottom: 40
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
        margin: 10,
        marginTop: 12,
        marginBottom: 40,
        padding: 20
    },
    card: {
        borderWidth: 1,
        margin: 10
    }
});

export default Styles;

//Colors: ivory '#fffff0', '#d4115c'