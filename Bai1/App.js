import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


export default function App() {
  let init = 1;
  const [diceRolls, setDiceRolls] = useState([])
  const [counter , setCounter] = useState(init);
  return (
    <View style ={{marginTop : 100}}>
      <Button
        title="Roll dice!"
        onPress={() => {
          setCounter(counter+1)
          setDiceRolls([...diceRolls, counter])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}