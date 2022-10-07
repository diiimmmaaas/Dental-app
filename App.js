import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen, PatientScreen} from "./screens";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                              component={HomeScreen}
                              options={{
                                  title: "Пациенты",
                                  headerTintColor: "#2A86FF",
                                  headerShadowVisible: {
                                      elevation: 0.5,
                                      shadowOpacity: 0.5,
                                  },
                              }}/>
                <Stack.Screen name="Patient"
                              component={PatientScreen}
                              options={{
                                  title: "Карта пациента",
                                  headerTintColor: "#2A86FF",
                                  headerShadowVisible: {
                                      elevation: 0.5,
                                      shadowOpacity: 0.5,
                                  },
                              }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

