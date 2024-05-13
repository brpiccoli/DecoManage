import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function TransactionManagementScreen() {
  // Exemplo: Lista de transações fictícia
  const transactions = [
    { id: 1, description: 'Initial Deposit', amount: 5000 },
    { id: 2, description: 'First Milestone', amount: 15000 },
    { id: 3, description: 'Second Milestone', amount: 10000 }
  ]

  return (
    <ScrollView style={styles.container}>
      {transactions.map((transaction) => (
        <View key={transaction.id} style={styles.transaction}>
          <Text>{transaction.description}</Text>
          <Text>${transaction.amount}</Text>
        </View>
      ))}
      <Button
        title="Add Transaction"
        onPress={() => {
          /* logic to add transaction */
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  }
})
