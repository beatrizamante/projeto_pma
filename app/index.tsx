import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Item from '../components/list/item/Item'

export default function Home() {
  return (
    <View className='flex'>
      <View>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Item></Item>
    <Card uri={require('../assets/icon.png')} content="Any Text"/>
      </View>
    </View>
  )
}