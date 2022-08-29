import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'black',
        fontSize: 20
    },
    inputFieldIOS: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText:  {
        fontSize: 18,
        color: 'black'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    buttonReturn: {
        position: 'absolute',
        top: 30,
        left: 20,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }
});