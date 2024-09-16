import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


export default function App() {
  let init = [5,6,7];
  const [diceRolls, setDiceRolls] = useState([init])
  const [counter , setCounter] = useState(init);
  return (
    <View style ={{marginTop : 100 , alignContent : 'center'}}>
      <Button
        title="Roll dice!"
        onPress={() =>{
          const newCounter = counter.map((item)=> item+1)
          setCounter(newCounter)
          setDiceRolls([...diceRolls, counter])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 , margin : 5 , padding : 5}} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
} 