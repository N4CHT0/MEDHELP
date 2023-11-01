import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import {ChartCircle,Notification, Setting,SearchNormal1,Airpod,Heart,OceanProtocol} from 'iconsax-react-native';
import { fontType } from './src/theme';
import { SLIDER } from './src/assets';
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

      <View style={searchBar.container}>
      <View style={{marginLeft: 22}}>
        <SearchNormal1 size="20"  color="#2D2C2C"/>
      </View>
      
      <TextInput
        style={{ marginLeft: 10, flex: 1,marginVertical: 4, }} // Style untuk TextInput
        placeholder="What do you need ?"
      />
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical: 8, marginHorizontal: 6,}}>
      <TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
              <Airpod size="32" color="#1F91FC" variant='Bold'/>
              <Text style={slider.text}>Medication</Text>
            </ImageBackground> 
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
              <Heart size="32" color="#1F91FC" variant='Bold'/>
              <Text style={slider.text}>Doctors</Text>
            </ImageBackground> 
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            <ImageBackground source={SLIDER} style={{padding: 68, marginHorizontal: 5, alignItems: 'center', gap: 4}} imageStyle={{borderRadius: 24,}}>
              <OceanProtocol size="32" color="#1F91FC" variant='Bold'/>
              <Text style={slider.text}>Labs</Text>
            </ImageBackground> 
        </View>
      </TouchableOpacity>
      
    </ScrollView>
    
    <View style={{flexDirection:'row', marginHorizontal: 14, marginVertical: 12, gap: 50, justifyContent: 'center'}}>
        <Text style={styles.text}>Upcoming Appointments</Text>
        <TouchableOpacity>
          <Text style={{fontFamily: fontType['NS-Medium'], fontSize: 20, color: '#1F91FC'}}>See All</Text>
        </TouchableOpacity>
    </View>

    <ScrollView horizontal style={styles.slider} showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://primecareclinic.co.id/wp-content/uploads/2022/08/THUMBNAIL-WEBSITE-MCU-POLIM-scaled-1-1200x1200.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://primecareclinic.co.id/wp-content/uploads/2022/12/SLIDE_1-2-1200x1200.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://primecareclinic.co.id/wp-content/uploads/2022/12/SLIDE_1-1200x1200.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://primecareclinic.co.id/wp-content/uploads/2023/03/SLIDE_1-1200x1200.jpg' }}
        />
        {/* Tambahkan gambar slider lainnya di sini */}
      </ScrollView>
    </View>
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
  },
  slider: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
  },
  sliderImage: {
    width: 250,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 20,
  },
})
const searchBar = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center' ,
    marginBottom: 10, 
    borderRadius:26,
    marginHorizontal: 10,
    marginTop: -16  ,
    backgroundColor: 'white',
}
})
const slider = StyleSheet.create({
  text: {
    fontFamily: fontType['NS-SemiBold'],
    fontSize: 18,
  },
})