import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8e0b3d',
        alignItems: 'stretch',
        justifyContent: "center",
        padding: 10,
        marginTop: Constants.statusBarHeight + 10,
    },
    contentBox: {
        backgroundColor: '#fffff0', //ivory
        borderWidth: 1,
        borderColor: 'black',
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
    },
    textInput: {
        margin: 10
    }
});

export default Styles;