import { NavigationContainer } from "@react-navigation/native";
import AppRouters from "./App.routes";


export default function Routes() {
    return (
        <NavigationContainer>
            <AppRouters />
        </NavigationContainer>
    )
}