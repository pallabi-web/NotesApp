// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './src/AppNavigator';


const App = () => {

  const  [ notes, setNotes ] = useState([]);


  const addNote = (note) => {
    const newNote = {
      id: Date.now().toString(),  
      title: note.title,          
      description: note.description,  
      date: new Date().toLocaleString(),  
    };

    setNotes((prevNotes) => [...prevNotes, newNote])
  };

      const handleDeleteNote = (noteId) => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    
  };
  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
};


    return (
    <View style={styles.container}>
      <AppNavigator 
      onAddNote={addNote} 
      notes={notes} 
      onEditNote={editNote} 
      onDeleteNote={handleDeleteNote} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default App;

