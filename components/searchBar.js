import { StyleSheet, View,TextInput } from 'react-native'
import React from 'react'
import {SearchNormal1} from 'iconsax-react-native';

const searchBar = () => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 22}}>
        <SearchNormal1 size="20"  color="#2D2C2C"/>
      </View>
      
      <TextInput
        style={styles.textInput} // Style untuk TextInput
        placeholder="What do you need ?"
      />
    </View>
  )
}

export default searchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center' ,
        marginBottom: 10, 
        borderRadius:26,
        marginHorizontal: 10,
        marginTop: -16  ,
        backgroundColor: 'white',
    },
    textInput: {
        marginLeft: 10,
        flex: 1,
        marginVertical: 4,
    }
})