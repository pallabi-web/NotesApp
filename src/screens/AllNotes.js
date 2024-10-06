import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const AllNotes = ({ notes, onDeleteNote }) =>{
    console.log('rendering allnotes with notes:' , notes);
   
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
          <Text style={styles.head}>NOTES</Text>
         
            <FlatList
                   data={notes}
                   
                   keyExtractor={(item) => item.id}
                   renderItem={({ item }) => (

                              <TouchableOpacity
                                style={styles.editBtn}
                                onPress={() => {
                                  navigation.navigate('AddNotes', { note: item });
                                }} >
                            
                            <View style={styles.noteItem}>
                       <Text style={styles.noteTitle}>{item.title}</Text>
                       
                       <Text style={styles.noteDescription}>{item.description}</Text>
                       
                       <Text style={styles.noteDate}>{item.date}</Text>

                       <TouchableOpacity
                                style={styles.deleteBtn}
                                onPress={() => onDeleteNote(item.id)} >
                                <Text style={styles.deleteBtnText}>Delete</Text>
                            </TouchableOpacity>

                            
                     </View>
                     </TouchableOpacity>
                   )}
                 />
                
        <TouchableOpacity style={styles.addbtn}
        onPress={() =>{
            navigation.navigate('AddNotes');
        }}>
        <Text style={styles.btntxt}>+</Text>  
        </TouchableOpacity>
       
        </SafeAreaView>     

    );
};
  
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        
    },
    head:{
      fontWeight: "bold",
      fontSize:20,
       textAlign:'center',
       paddingBottom:20,

    },
  
    deleteBtn: {
      paddingBottom:20,
      bottom:-10,
  },
  deleteBtnText: {
    fontSize:20,
    color: "red",
    textAlign:'left',
    fontWeight: "bold",

  },



   addbtn:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'black',
        position: 'absolute', 
        bottom: 20,            
        right: 20,  
        alignItems:'center',
        justifyContent:'center',
    },
    btntxt:{
        fontSize:40,
        color:'white',
      
    },
 
    noteItem: {
        padding: 28,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 1,
        margin:10,
        paddingBottom:0,
        
      },
      noteTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:0,
      },
      noteDescription: {
        fontSize: 19,
        marginTop: 5,
        fontWeight: 'bold',
        marginBottom:0,


      },
      noteDate: {
        fontSize: 15,
        color: 'black',
        marginTop:10,
        fontWeight: 'bold',
        marginBottom:0,


      },
    });

export default AllNotes;