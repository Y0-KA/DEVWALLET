import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View, Text, TouchableOpacity,ScrollView } from "react-native";

import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { TitilliumWeb_600SemiBold } from "@expo-google-fonts/titillium-web";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Transactions from "../components/Transactions";
import Quotes from "../components/Quotes";
import { useNavigation } from "@react-navigation/native";

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        TitilliumWeb_600SemiBold,
    });

    const navigation = useNavigation()

    function handleAddClick(){
        navigation.navigate('add')
    }
    return (
        <View style={styles.container}>
            {fontsLoaded ? (
                <>
                    <Header />
                    <Summary />
                    <ScrollView style={styles.scroll}>
                    <Transactions />
                    <Quotes />
                    <TouchableOpacity onPress={() => handleAddClick()} style={styles.btn}>
                        <Text style={styles.btnText}>
                            Criar transaçao
                        </Text>
                    </TouchableOpacity>
                    </ScrollView>

                </>
            ) : (
                <ActivityIndicator />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    btn: {
        width: "100%",
        backgroundColor: '#9cc5fd',
        borderRadius: 16,
        marginTop: 32,
        padding: 16,
    },
    btnText: {
        textAlign: 'center',
        width: '100%',
        color: '#0f172a',
        fontFamily: 'TitilliumWeb_600SemiBold',
        fontSize: 16,
    },
    scroll: {width: "100%"}
});
