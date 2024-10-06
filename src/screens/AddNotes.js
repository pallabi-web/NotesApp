import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const AddNotes = ({ onAddNote , onEditNote}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const route = useRoute();

    const isEditing = route.params?.note; 
    const noteToEdit = route.params?.note;
  
   
    useEffect(() => {
        if (isEditing) {
            setTitle(noteToEdit.title);
            setDescription(noteToEdit.description);
        }
    }, [isEditing]);

    const handleAddNote = () => {
        if (title.trim() && description.trim()) {
            if (isEditing) {
                onEditNote({
                    ...noteToEdit,
                    title,
                    description,
                    date: new Date().toLocaleString(), 

                });
            } else {
                onAddNote({
                    title,
                    description,
                    id: Date.now().toString(), 
                    date: new Date().toLocaleString(), 
                });
            }
            setTitle('');
            setDescription('');
            navigation.navigate('AllNotes');
        } else {
            console.log("Title or description is empty");
        }
    };

    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
             <TouchableOpacity style={styles.backbtn}
        onPress={() =>{
            navigation.navigate('AllNotes');
        }}>
        <Text style={styles.backtxt}>←</Text>  
        </TouchableOpacity>
            <TextInput
             placeholder="Title" 
             style={styles.titin} 
             value={title}
            onChangeText={setTitle} />

            <TextInput 
            placeholder="Note" 
            value={description}
            onChangeText={setDescription}
            multiline
            style={styles.notein} />
          
            <TouchableOpacity style={styles.addbutn}>
            <Text style={styles.btntext} onPress={handleAddNote}>✔</Text>  
            </TouchableOpacity>
        </SafeAreaView>

    );
};
const styles= StyleSheet.create({
    container:{
        flex:1,
        
    },
    titin:{
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:20,
        top:60,
        height:55,
        width:'90%',
        
        
    },
    notein:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:25,
        top:70,
        width:'90%',
        flex:1,
        textAlignVertical:'top',
       
    },
    addbutn:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'black',
        position: 'absolute', 
        bottom: 30,            
        right: 30,  
        alignItems:'center',
        justifyContent:'center',
    },
    btntext:{
        fontSize:30,
        color:'white',
        
    },
    backbtn:{
        width:40,
        height:90,
        paddingLeft:10,
        top:-10,
        position:'absolute',
    },
    backtxt:{
        fontSize:40,
        color:'black',
        fontWeight:'bold',

    },

});
export default AddNotes;