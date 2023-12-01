import { StyleSheet, Text, View,ScrollView,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { fontType } from '../src/theme';
import { SLIDER } from '../src/assets';
import {Airpod,Heart,OceanProtocol} from 'iconsax-react-native';
const Category = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical: 8, marginHorizontal: 6,}}>
        <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
                <Airpod size="32" color="#1F91FC" variant='Bold'/>
                <Text style={styles.text}>Medication</Text>
                </ImageBackground> 
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
                <Heart size="32" color="#1F91FC" variant='Bold'/>
                <Text style={styles.text}>Doctors</Text>
                </ImageBackground> 
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
                <OceanProtocol size="32" color="#1F91FC" variant='Bold'/>
                <Text style={styles.text}>Labs</Text>
                </ImageBackground> 
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
    text: {
        fontFamily: fontType['NS-SemiBold'],
        fontSize: 18,
      },
})