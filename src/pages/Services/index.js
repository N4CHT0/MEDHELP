import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Call, ChartCircle,Hospital,Notification, People, Setting} from 'iconsax-react-native';
import { fontType } from '../../theme';
import { SLIDER } from '../../assets';
import FastImage from 'react-native-fast-image'
const Services = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
            <ChartCircle size="36" color="#1F91FC"/>
            <Text style={styles.headerTitle}>MEDHELP.</Text>
            <TouchableOpacity>
              <View style={{marginLeft: 100,}}>
                <Notification size="30" color="#232425"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{marginLeft: 16,}}>
                <Setting size="30" color="#232425"/>
              </View>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 20,gap: 20}}>
          <TouchableOpacity>
            <ImageBackground source={SLIDER} style={{padding: 30,alignItems: 'center', gap: 10}} imageStyle={{borderRadius: 20,}}>
                <People size={"30"} color='#111111'/>
                <Text style={styles.text}>Consultate</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageBackground source={SLIDER} style={{padding: 30,alignItems: 'center', gap: 10}} imageStyle={{borderRadius: 20,}}>
                <Hospital size={"30"} color='#111111'/>
                <Text style={styles.text}>Hospital</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{gap: 20,padding: 20,marginVertical: 10,}}>
          <View>
            <Text style={{fontFamily: fontType['NS-Bold'], fontSize: 18,}}>Boost Your Immunity</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', gap: 20,}}>
                <FastImage style={{width: 100,height: 100}} source={{uri : 'https://s3-v2-klikdokter-marketplace.s3.ap-southeast-1.amazonaws.com/m0cha-uuxahp2xiP/uploads/product/17928/17928_1637116854.2746.jpg'}}/>
                <View style={{flexWrap: 'wrap', flexDirection: 'column'}}>
                  <Text style={{fontFamily: fontType['NS-Light']}}>Imboost Vitamin C Tube 8 Tablet</Text>
                  <Text style={{fontFamily: fontType['NS-SemiBold']}}>Rp.42.000.00</Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
          </View>
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7FBFA',
    flexDirection: 'row',
    gap: 6,
    padding: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: fontType['NS-ExtraBold'],
    fontSize: 23,
  },
  text:{
    fontFamily: fontType['NS-ExtraBold'],
    fontSize: 14
  }
})