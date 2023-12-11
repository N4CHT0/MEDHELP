import { Image,Animated, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View,ActivityIndicator,RefreshControl } from 'react-native'
import {useNavigation,useFocusEffect} from '@react-navigation/native';
import React, {useRef,useState,useCallback,useEffect} from 'react';
import {Call, Category2, ChartCircle,Hospital,Notification, People, SearchNormal1, Setting} from 'iconsax-react-native';
import { fontType } from '../../theme';
import { SLIDER } from '../../assets';
import { Item } from '../../../components';
import firestore from '@react-native-firebase/firestore';
const Services = () => {
  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
      const subscriber = firestore()
        .collection('item')
        .onSnapshot(querySnapshot => {
          const item = [];
          querySnapshot.forEach(documentSnapshot => {
            item.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setProductData(item);
          setLoading(false);
        });
      return () => subscriber();
    }, []);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        firestore()
          .collection('item')
          .onSnapshot(querySnapshot => {
            const item = [];
            querySnapshot.forEach(documentSnapshot => {
              item.push({
                ...documentSnapshot.data(),
                id: documentSnapshot.id,
              });
            });
            setProductData(productData);
          });
        setRefreshing(false);
      }, 1500);
    }, []);
  return (
    <View style={{flex: 1}}>
      <Animated.ScrollView
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: true},
      )}
      contentContainerStyle={{paddingTop: 0}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Animated.View style={[styles.header, {transform: [{translateY: recentY}]}]}>
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
        </Animated.View>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <View style={{borderRadius: 20,alignItems: 'center',flexDirection:'row', gap: 20, padding: 20, backgroundColor: '#FFFFFF', marginHorizontal: 10, marginBottom: 20}}>
              <SearchNormal1 size="26" color="#000000"/>
              <Text style={{fontFamily: fontType['NS-Medium']}}>Search..</Text>
          </View>
        </TouchableOpacity>
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
          <View style={{gap: 20}}>
          {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                productData.map((item, index) => <Item item={item} key={index}/>)
              )}
        </View>
          </View>
      </Animated.ScrollView>
      <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'#1F91FC',borderRadius: 20}} onPress={() => navigation.navigate("AddItem")}>
        <Category2 size="29"  color="#F7F7F7" variant='Bold'/>
    </TouchableOpacity>
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