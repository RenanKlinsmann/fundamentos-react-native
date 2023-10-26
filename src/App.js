import React, {Component} from "react";
import { Text, View } from "react-native";
import Primeiro from './componentes/Primeiro'
import PrimeiroProps from "./componentes/PrimeiroProps";
export default () =>  {
    
        return (
            <View>
                {/*<Primeiro/>*/}
                <PrimeiroProps numero={10}/>

            </View>
                
        )
    
}
