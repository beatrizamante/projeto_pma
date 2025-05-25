import { View, Text } from 'react-native'
import React from 'react'
import Input from '../components/form/Input'
import Button from '../components/Button'

export default function Home() {
  return (
    <View className='flex'>
      <View>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>
      <Text>HOME</Text>

        <Button content="Random" onPress={function (): void {
          throw new Error('Function not implemented.')
        } }/>
        <Input label={'This is a label'}/>

      </View>
    </View>
  )
}