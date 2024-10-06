import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AllNotes from "./screens/AllNotes";
import AddNotes from "./screens/AddNotes";

const Stack = createStackNavigator();
const AppNavigator = ({onAddNote, notes, onDeleteNote, onEditNote}) =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AllNotes">
            <Stack.Screen name="AllNotes" 
           options={{ headerShown: false }}>
          {(props) => <AllNotes {...props} notes={notes} onDeleteNote={onDeleteNote} />}
         </Stack.Screen>
       
        <Stack.Screen name="AddNotes" 
         options={{ headerShown: false }}>
        {(props) => <AddNotes {...props} onAddNote={onAddNote} onEditNote={onEditNote} />}

        </Stack.Screen>
        </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;