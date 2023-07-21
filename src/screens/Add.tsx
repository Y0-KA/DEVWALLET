import { ActivityIndicator, StyleSheet, TextInput, View, Text, TouchableOpacity,ScrollView } from "react-native";
import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import Header from "../components/Header";
import SwitchButton from "../components/SwitchButton";
import { useState } from "react";
export default function Add() {

    const [btnColor, setBtnColor] = useState<"in"| "out"| null>(null);
    
    
    return (
        <>
        <View style={styles.container}>
        <Header/>

        <View style={styles.items}>
            <Text style={styles.title}>Adicionar uma transação</Text>
            <View style={styles.DVT}>
                <Text style={styles.label}>Descrição</Text>
                <TextInput placeholderTextColor={"#44659b"} style={styles.input} placeholder={"Ex.: Salário mensal"}/>
            </View>


            <View style={styles.DVT}>
                <Text style={styles.label}>Valor</Text>
                <TextInput keyboardType="numeric" placeholderTextColor={"#44659b"} style={styles.input} placeholder={"Ex.: R$ 9.000,00"}/>
            </View>


            <View style={styles.DVT}>
                <Text style={styles.label}>Tipo</Text>
                <SwitchButton state={btnColor} onChange={setBtnColor}/>
            </View>

            <View>
                <TouchableOpacity style={styles.addButton}> 

                    <Text style={styles.textAdd}>Adicionar</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>

                    <Text style={styles.textCancel}>Cancelar</Text>

                </TouchableOpacity>
            </View>
        </View>
           </View>
        </>
    )
};
                                                                                                           
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    items: {
        backgroundColor: "#0f172a",
        justifyContent: "flex-start",
        paddingHorizontal: 10,

    },
    title: {
        color: "#fff",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 24,
        fontFamily: "Inter_700Bold",
    },
    label: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter_400Regular",
        marginBottom: 10,
    },
    input: {
        borderRadius: 10,
        borderColor: "#006EB7",
        borderWidth: 2,
        backgroundColor: "#1E293B",
        padding: 10,
        width: 324,
        color: "#fff",
    },
    DVT: {
        marginBottom: 24,
    }, 
    addButton: {
        backgroundColor: "#1E293B",
        padding: 20,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#B2291C",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
    },
    textAdd: {
        color: "#4CC522",
        
    },
    textCancel: {
        color: "#fff"
    }
    

})

