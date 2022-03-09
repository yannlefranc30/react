import { Text, View } from "react-native"
import { useState } from 'react';

export default Details = ({}) => { 
    const [game,SetGame]=useState({});
 return (
 <View style={style.page}>
 <Text>Détails</Text>
 </View>
 )
}
const style = {
 page: {
 flex: 1
 }
}