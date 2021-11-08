import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Home({ navigation }){
  var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const [selectedImage, setSelectedImage] = React.useState('');
    const total = (navigation.getParam('Cppl') * navigation.getParam('Quantity')).toFixed(2);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>REFLECT MEDIA</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>0814920866/ 0793166882</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>QUOTE ({date}/{month}/{year})</Text>
            <Text></Text>
            <Text style={{textAlign: 'center'}}>Name: {navigation.getParam('Name')}</Text>
            <Text></Text>
            <Text style={{textAlign: 'center'}}>Size: {navigation.getParam('Length')}x{navigation.getParam('Width')}mm</Text>
            <Text></Text>
            <Text style={{textAlign: 'center'}}>Cost per Label: R{navigation.getParam('Cppl')} ea.</Text>
            <Text></Text>
            <Text style={{textAlign: 'center'}}>Quantity: {navigation.getParam('Quantity')}</Text>
            <Text></Text>
            <Text style={{textAlign: 'center'}}>Total: R{total}</Text>
            <Text></Text>
            <TouchableOpacity style={{textAlign: 'center'}} onPress={openImagePickerAsync}>
              <Text style={{textAlign: 'center'}}>Sample Photo</Text>
            </TouchableOpacity>
            <Text></Text>
            <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
            />
            <Text></Text>
            <Text style={styles.box}>Please Note: All quotes valid for 24hrs.
                  Screenshot images will differ from actual print.
                  Extra prints (if any) exceeding 3 units will be charged for.
                  Price subject to change due to material cost changes (You will be notificed of any price change
                   before commencing print).
                  Please check all artwork.
                  Prints will commence once order is confirmed.
            </Text>
      </View>  
      );
    }
      else{
        return (
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{textAlign: 'center'}}>REFLECT MEDIA</Text>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>0814920866/ 0793166882</Text>
          <Text>QUOTE ({date}/{month}/{year})</Text>
          <Text></Text>
          <Text>Name: {navigation.getParam('Name')}</Text>
          <Text></Text>
          <Text>Size: {navigation.getParam('Length')}x{navigation.getParam('Width')}mm</Text>
          <Text></Text>
          <Text>Cost per Label: R{navigation.getParam('Cppl')} ea.</Text>
          <Text></Text>
          <Text>Quantity: {navigation.getParam('Quantity')}</Text>
          <Text></Text>
          <Text>Total: R{total}</Text>
          <Text></Text>
          <TouchableOpacity onPress={openImagePickerAsync}>
            <Text>Pick a photo</Text>
          </TouchableOpacity>
          <Text></Text>
            <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          />
          <Text></Text>
          <Text style={styles.box}>Please Note: All quotes valid for 24hrs.
                  Screenshot images will differ from actual print.
                  Extra prints (if any) exceeding 3 units will be charged for.
                  Price subject to change due to material cost changes (You will be notificed of any price change
                   before commencing print).
                  Please check all artwork.
                  Prints will commence once order is confirmed.
            </Text>
          <Text></Text>
          
      </View>
        );
      }
  }

    

const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    thumbnail: {
      width: 250,
      height: 250,
      resizeMode: "contain"
    },
    box:{
      borderWidth: 2,
      borderColor: "#000000",
      fontSize: 9,
      paddingLeft: 5,
      paddingRight: 5
    },
  });