import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Estilo from './components/estilo'

// import Primeiro from './components/Primeiro'
// import X, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={Estilo.App}>
        <MinMax min={1} max={60} />
        <MinMax min={1} max={60} />
        <MinMax min={1} max={60} />
        <MinMax min={1} max={60} />
        <MinMax min={1} max={60} />
        <MinMax min={1} max={60} />
        {/* <X></X>
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro /> */}
    </SafeAreaView>
)