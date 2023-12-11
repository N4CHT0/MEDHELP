import { useNavigation } from "@react-navigation/native";
import { Setting,SearchNormal1,Notification, AddCircle,ChartCircle,Add,AddSquare } from "iconsax-react-native";
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
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {fontType} from '../../theme';
import FastImage from "react-native-fast-image";
const AddItem = () => {
    const [loading, setLoading] = useState(false);
        const [productData, setProductData] = useState({
            title: "",
            description: "",
            price: "",
            createdAt: '',
            totalLikes: 0,
            totalComments: 0,
        });
        const handleUpload = async () => {
            let filename = image.substring(image.lastIndexOf('/') + 1);
            const extension = filename.split('.').pop();
            const name = filename.split('.').slice(0, -1).join('.');
            filename = name + Date.now() + '.' + extension;
            const reference = storage().ref(`image/${filename}`);
            setLoading(true);
            try {
            await reference.putFile(image);
            const url = await reference.getDownloadURL();
            await firestore().collection('item').add({
                title: productData.title,
                description: productData.description,
                image: url,
                price: productData.price,
                totalComments: productData.totalComments,
                totalLikes: productData.totalLikes,
                createdAt: new Date(),
            });
            setLoading(false);
            console.log('Item added!');
            navigation.navigate('Services');
            } catch (error) {
            console.log(error);
            }
            };
        const handleChange = (key, value) => {
            setProductData({
            ...productData,
            [key]: value,
            });
        };
        const handleImagePick = async () => {
            ImagePicker.openPicker({
              width: 1920,
              height: 1080,
              cropping: true,
            })
              .then(image => {
                console.log(image);
                setImage(image.path);
              })
              .catch(error => {
                console.log(error);
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
                {image ? (
            <View style={{position: 'relative'}}>
                <FastImage
                style={{width: '100%', height: 127, borderRadius: 5}}
                source={{
                    uri: image,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                />
                <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    backgroundColor: 'blue',
                    borderRadius: 25,
                }}
                onPress={() => setImage(null)}>
                <Add
                    size={20}
                    variant="Linear"
                    color="white"
                    style={{transform: [{rotate: '45deg'}]}}
                />
                </TouchableOpacity>
            </View>
            ) : (
            <TouchableOpacity onPress={handleImagePick}>
                <View
                style={[
                    textInput.borderDashed,
                    {
                    gap: 10,
                    paddingVertical: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    },
                ]}>
                <AddSquare color="" variant="Linear" size={42} />
                <Text
                    style={{
                    fontFamily: fontType['Pjs-Regular'],
                    fontSize: 12,
                    color: 'gray',
                    }}>
                    Upload Thumbnail
                </Text>
                </View>
            </TouchableOpacity>
            )}
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Obat."
                    value={productData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Keterangan Obat."
                    value={productData.description}
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Harga."
                    value={productData.price}
                    onChangeText={(text) => handleChange("price", text)}
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