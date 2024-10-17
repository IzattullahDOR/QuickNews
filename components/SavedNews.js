import { StyleSheet, Text, View } from 'react-native';
export default function SavedNews() {

    return (
        <View style={styles.container}>
            <Text>Saved News Here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});