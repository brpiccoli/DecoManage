import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { Button, Image, View } from 'react-native'

export default function PhotoUploadScreen() {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true
    })

    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  )
}
