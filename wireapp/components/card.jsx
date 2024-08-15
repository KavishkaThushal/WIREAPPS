import { View, Text, Image } from 'react-native'
import React from 'react'
import img from '../assets/images/react-logo.png'
const Card = () => {
  return (
    <View className="flex flex-col  mt-3   rounded-lg
    bg-slate-100 shadow-lg">
      <View className="w-[150px] h-[150px]">
        <Image source={img} className="w-full h-full object-contain" />
      </View>
      <View className="flex flex-col gap-2 p-2">
        <Text className="font-medium">React Native</Text>
        <Text className="text-red-800 font-medium">{`£${100}`}</Text>
      </View>
    </View>
  )
}

export default Card