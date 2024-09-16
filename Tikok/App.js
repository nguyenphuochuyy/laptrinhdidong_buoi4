import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import book from "./assets/book.png"
import { useState } from 'react';
export default function App() {
  const [price , setPrice] = useState(141.800);
  const [quantity , setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View>
        
      </View>
       <View style={styles.box1} >
          <View>
            <Image source={book}></Image>
          </View>
          <View style = {{marginLeft : 20}}>
            <Text style = {{fontWeight : 600 , marginBottom : 10}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style = {{fontWeight : 600}}>Cung cấp bởi Tiki Trading</Text>
            <Text style = {{fontSize : 24 , color : 'red'}}>141.800</Text>
            <Text style={styles.oldPrice}>141.800</Text>
            <View style = {{flexDirection : 'row' }}>
            
              <Button title='+' onPress={()=> {setQuantity(quantity+1)}}></Button>
               <Text>{quantity}</Text>
              <Button title='-' onPress={()=> { setQuantity(quantity-1)}}></Button>
              <View>
              <Text style = {{marginHorizontal : 20 , color : 'blue' , fontWeight :500}}>Mua sau</Text>
              </View>
              <View>
              
              </View>
            </View>
           
          </View>
         
       </View>

       <View style ={{flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center', marginBottom : 450}}>
              <Text style={{borderWidth : 1 , borderColor : 'black' , paddingHorizontal : 35 , paddingVertical : 10 }}>Mã giảm giá</Text>
              <Button title='Áp dụng'></Button>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal : 50,
    flex: 1,
    backgroundColor: '#fff',
  
  },
  box1 : {
  
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    
  },
  box2 : {
    marginTop : 20,
    flex : 1
  }
});
