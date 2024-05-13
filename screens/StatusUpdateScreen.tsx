import React, { useState } from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'

export default function StatusUpdateScreen() {
  const [status, setStatus] = useState('')

  const updateStatus = () => {
    Alert.alert('Status Updated to:', status)
    //Implementar a lógica para enviar o status ao servidor ou database
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Construction Status"
        value={status}
        onChangeText={setStatus}
        style={styles.input}
      />
      <Button title="Update Status" onPress={updateStatus} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  }
})
