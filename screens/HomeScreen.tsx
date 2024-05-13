import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        title="Update Construction Status"
        onPress={() => navigation.navigate('Status Update')}
      />
      <Button
        title="Upload Photos"
        onPress={() => navigation.navigate('Upload Photos')}
      />
      <Button
        title="Manage Transactions"
        onPress={() => navigation.navigate('Manage Transactions')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
})
