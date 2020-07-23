import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import X, { Comp1, Comp2 } from './components/Multi'

export default () => (
    <SafeAreaView style={style.App}>
        <X></X>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro />
    </SafeAreaView>
)

const style = StyleSheet.create({
    App:  {
        backgroundColor: '#FAFAFA',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})