import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, TouchableOpacity,} from 'react-native';
import {ChartCircle,Notification, Setting} from 'iconsax-react-native';
import { fontType } from './src/theme';
import {SearchBar,Category,Promo} from './components';
const App = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
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
        <SearchBar/>
        <Category/>
        <View style={{flexDirection:'row', marginHorizontal: 14, marginVertical: 12, gap: 50, justifyContent: 'center'}}>
            <Text style={styles.text}>Upcoming Appointments</Text>
            <TouchableOpacity>
              <Text style={{fontFamily: fontType['NS-Medium'], fontSize: 20, color: '#1F91FC'}}>See All</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Promo/>
    </ScrollView>
  )
}
export default App
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
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
    fontSize: 18
  }
})