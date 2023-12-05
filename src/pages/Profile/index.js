import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Book1, Call, ChartCircle,Hospital,Notification, People, Setting, Setting3, Setting4} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image'
import { fontType } from '../../theme';

const Profile = () => {
  return (
    <View>
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
        <FastImage
        style={{alignSelf: 'center',width: 100,height: 100,borderRadius: 60}}
        source={{uri: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        <View style={{alignItems: 'center', marginVertical: 20, gap:10}}>
          <Text style={{fontFamily: fontType['NS-SemiBold'], fontSize: 20}}>Martha Putra</Text>
          <Text style={{fontFamily: fontType['NS-SemiBold'], fontSize: 16,}}>cum is fun</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', gap: 20, padding: 20, marginHorizontal: 20, justifyContent: 'center'}}>
            <TouchableOpacity>
              <View style={{gap: 10, alignItems: 'center'}}>
                <Book1 size="32" color="#1F91FC"/>
                <Text>History</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{gap: 10, alignItems: 'center'}}>
                <Setting3 size="32" color="#1F91FC"/>
                <Text>Setting</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Profile

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
})