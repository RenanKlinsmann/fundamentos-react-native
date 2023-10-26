import {React} from "react";
import { Text } from "react-native";


export default (a) => {
    const teste = a.numero < 10 ? "Numero Baixo" : "Numero Alto"
    return (
        <Text>
            {teste}
        </Text>
        );
}