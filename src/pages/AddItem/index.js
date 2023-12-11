import { useNavigation } from "@react-navigation/native";
import { Setting,SearchNormal1,Notification, AddCircle,ChartCircle } from "iconsax-react-native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import axios from 'axios';
import {fontType} from '../../theme';
const AddItem = () => {
    const [loading, setLoading] = useState(false);
        const [itemData, setitemData] = useState({
            title: "",
            description: "",
            price: "",
            createdAt: '',
            totalLikes: 0,
            totalComments: 0,
        });
        const handleUpload = async () => {
            setLoading(true);
            try {
              await axios.post('https://6570c75b09586eff6641efc2.mockapi.io/medhelp/product', {
                  title: itemData.title,
                  description: itemData.description,
                  price: itemData.price,
                  image,
                  totalComments: itemData.totalComments,
                  totalLikes: itemData.totalLikes,
                  createdAt: new Date(),
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
              setLoading(false);
              navigation.navigate('Services');
            } catch (e) {
              console.log(e);
            }
          };
        const handleChange = (key, value) => {
            setitemData({
            ...itemData,
            [key]: value,
            });
        };
        const [image, setImage] = useState(null);
        const navigation = useNavigation();
    return (
            <View style={{flex: 1}}>
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
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Obat."
                    value={itemData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Keterangan Obat."
                    value={itemData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Harga."
                    value={itemData.price}
                    onChangeText={(text) => handleChange("price", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="URL."
                    value={itemData.image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
                <AddCircle variant="Linear" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddItem

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
const textInput = StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: fontType['NS-Medium']
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})