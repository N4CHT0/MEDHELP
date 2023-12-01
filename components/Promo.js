import { StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'

const Promo = () => {
  return (
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
  )
}

export default Promo

const styles = StyleSheet.create({
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