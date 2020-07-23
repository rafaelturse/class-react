import React from 'react'
import { SafeAreaView } from 'react-native'

import Primeiro from './components/Primeiro'
import X, { Comp1, Comp2 } from './components/Multi'

export default () => (
    <SafeAreaView>
        <X></X>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro />
    </SafeAreaView>
)