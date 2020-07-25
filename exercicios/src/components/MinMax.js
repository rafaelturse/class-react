import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default ({min, max}) => {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min

    console.warn(min, max)

    return (
        <Text style={Estilo.txtG}>
            {max} > {min}, aleatorio = {aleatorio}
        </Text>
    )
}