import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView>
        <Text>{ 1 +1 }</Text>
        <Primeiro />
    </SafeAreaView>
)